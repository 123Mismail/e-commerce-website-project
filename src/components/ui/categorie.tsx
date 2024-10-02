import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categorie = ( ) => {
   
  return (
    <div className="mt-[100px]  ">
      {/*heading starts  */}
      <div className="text-center mb-20">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
          Categories
        </h1>
        <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          find different categories with latest designs,
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* heading ends */}

      {/* category starts here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1st  */}
        <div className="mb-7 lg:mb-0 z-10 overflow-hidden relative group"> 
          <Link href={"/tops"}>
          <Image
            src={require("@/app/fonts/tops.avif")}
            height={400}
            width={400}
            alt="tops"
            className="group-hover:scale-125 duration-500"
          ></Image></Link>
          <div className=" hidden lg:block absolute -bottom-16 group-hover:bottom-1 duration-300 p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">Tops</h2>
          </div>
          <div className=" block lg:hidden absolute  bottom-1     p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">Tops</h2>
          </div>
        </div>

        {/* 2nd */}
        <div className="mb-7 lg:mb-0 z-10 overflow-hidden relative group">
          <Link href={"/pants"}> <Image
            src={require("@/app/fonts/pants.avif")}
            height={400}
            width={400}
            alt="pants"
            className="group-hover:scale-125 duration-500"
          ></Image></Link>
          <div className=" hidden lg:block absolute -bottom-16 group-hover:bottom-1 duration-300 p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">pants</h2>
          </div>
          <div className=" block lg:hidden absolute  bottom-3     p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">pants</h2>
          </div>
        </div>
        {/* 3rd */}
        <div className="mb-7 lg:mb-0 z-10 overflow-hidden relative group">
          <Link href={'/accesseries'}><Image
            src={require("@/app/fonts/jwellery1.avif")}
            height={400}
            width={400}
            alt="jwellery"
            className="group-hover:scale-125 duration-500"
          ></Image></Link> 
          <div className=" hidden lg:block absolute -bottom-16 group-hover:bottom-1 duration-300 p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">jwellery</h2>
          </div>
          <div className=" block lg:hidden absolute  bottom-1     p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">jwellery</h2>
          </div>
        </div>
        {/* 4th */}
        <div className="mb-7 lg:mb-0 z-10 overflow-hidden relative group">
          <Link href={'/shoes'}> <Image
            src={require("@/app/fonts/shoess.avif")}
            height={400}
            width={400}
            alt="shoes"
            className="group-hover:scale-125 duration-500"
          ></Image></Link>
          <div className=" hidden lg:block absolute -bottom-16 group-hover:bottom-1 duration-300 p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">shoes</h2>
          </div>
          <div className=" block lg:hidden absolute  bottom-1     p-2 text-myWhite text-xl font-bold text-center w-full bg-myBlackPara/70  mx-auto ">
            <h2 className="uppercase">shoes</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
