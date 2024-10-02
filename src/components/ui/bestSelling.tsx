"use client"
import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import CardsComponent from '../cardsComponent';
import { useAppSelector } from '@/app/store/hooks';



const BestSelling = () => {
 const itemsData =useAppSelector((data)=>data.product);
 
 const cardItems1=itemsData.slice(0,1);
 const cardItems2=itemsData.slice(4,5);
 const cardItems3=itemsData.slice(7,8);
const cardItems=[...cardItems1,...cardItems2,...cardItems3]
 
  return (
    <div className='mt-[100px] mb-[100px]'>
      {/* heading */}
         <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
            Best Sellings
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
           find our best selling products collection.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>

{/* card stars here */}
<div className='flex flex-wrap justify-center  gap-12'>
 
{
    cardItems.map((items:any,id)=>(
        <CardsComponent 
        key={id}
        src={items.image[0]}
        alt={items.alt}
        title={items.title}
        price={items.price}
        description={items.description}
        category={items.category}
        slug={items.slug}
        discount={items.discount}
        />
    ))
}
</div>

    </div>
  )
}

export default BestSelling