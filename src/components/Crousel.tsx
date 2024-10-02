
"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsComponent from "./cardsComponent";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";


const Crousel = () => { 
   const cardItems=useAppSelector((products)=>products.product) 
   

var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }
      },
      {
        breakpoint: 600,
        settings: {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }
      },
      {
        breakpoint: 480,
        settings: {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        }
      }
    ]
  };


  return (
    <div className="mt-[100px] mb-[100px] slider-container">
     
       {/* heading */}
       <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl mb-10  ">
            Our Collection
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* crousel starts */}

      <Slider {...settings}>
        
      {
    cardItems.map((items:any,id)=>(
         <div key={id}>
     
      <Image src={items.image[0]} height={500} width={500} alt={items.category} className="h-[400px] w-[400px] rounded-tl-[90px] rounded-br-[90px] object-cover"></Image>
        
        
        </div>
    ))
}

      </Slider> 

      <div className="mx-auto mt-9 w-[70%] flex  justify-center space-x-6 text-center  "><p className="text-center scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl  "> <span className="text-myOrange animate-ping ">Shoes</span> Collections</p>
      <p className="text-center scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl "> <span className="text-myOrange animate-ping ">Pants</span> Collections</p>
      <p className="text-center scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl "> <span className="text-myOrange animate-ping">Accesseries</span> Collections</p>
      </div>
      </div>
      
   
  );
};

export default Crousel;
