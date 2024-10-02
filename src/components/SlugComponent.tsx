"use client";
import React, { useState } from "react";
import Image from "next/image";
const SlugComponent = ({ img }: any) => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        className="h-[380px] w-[380px] object-cover"
        src={path ? path : img[0]}
        height={400}
        width={400}
        alt="women-tops"
      ></Image>

      <div className="flex justify-evenly items-center mx-auto mt-3 cursor-pointer">
        
          {img.map((image: string, i: number) => (
            <Image
            className="h-[100px]"
              key={i}
              src={image}
              height={90}
              width={90}
              alt="tops"
              onClick={() => setPath(image)}
            ></Image>
          ))}
      
      </div>
    </div>
  );
};

export default SlugComponent;
