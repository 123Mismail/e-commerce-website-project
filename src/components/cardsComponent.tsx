import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import AddBestSelAddtoCard from "./addBestSelAddtoCard";

const CardsComponent = ({
  src,
  alt,
  title,
  price,
  description,
  category,
  slug,
  discount
}: {
  src: string;
  alt: string;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  slug: string;
  discount:number
}) => {

  return (
      
      <div className="h-[35rem] w-[350px] relative group ">
        {/* image div */}
        <Link href={`/${category}/${slug}`}>
        <div className="block h-[23rem] overflow-hidden rounded-sm shadow-xl ">
          <Image src={src} height={370} width={370} alt=""></Image>
        </div>
        </Link>
        {/* card body title paragraph  */}
        <div className="card-body relative max-w-[370]  ">
          <h2 className="card-title line-clamp-1 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">{title} </h2>
          <div className="flex">
            <p className={`scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 ${discount >0 && "line-through decoration-2 decoration-myOrange"} `}>Price:${price}</p>
            {/* discount */}
            <p className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 ">${price! - (price!*discount/100)}</p>
            <p className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 ">{discount}% Off</p>
          </div>
          <p className="line-clamp-1 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 ">{description}</p>
          <div className="card-actions justify-between mt-2 text-lg ">
            <Button className="  rounded-xl  group-hover:bg-myBlackHead group-hover:text-myWhite" > <FaHeart className="mr-1 h-4 w-4"/>favourites</Button>
            <AddBestSelAddtoCard slug={slug} />
            {/* <Button className="  rounded-xl  group-hover:bg-myBlackHead group-hover:text-myWhite" > <FiShoppingCart className="mr-1 h-4 w-4" /> Addto Card</Button> */}
          </div>
        </div>
      </div>
   
  );
};

export default CardsComponent;
