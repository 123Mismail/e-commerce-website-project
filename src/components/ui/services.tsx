import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="  body-font">
      <div className="container px-5  mx-auto pt-[100px] pb-[100px] ">
        <div className="text-center mb-20">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
            Services
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            enjoy world best services from our customer services branch.
            make your shopping memorable by asking your queries.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-150 150 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
             <Image src={require("@/app/fonts/delivery.jpeg")} height={150} width={150} alt="delivery"></Image>
            </div>
            <div className="flex-grow ">
              <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl  mb-3 group-hover:text-myOrange">
                Free Delivery
              </h2>
              <p className="capitalize  text-base line-clamp-2 leading-7 [&:not(:first-child)]:mt-6">
                free services for shoping above $1000 and gets free delivery
                around the world.Enjoy our free delivery offer and order know.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-150 150 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
             <Image src={require("@/app/fonts/money.jpeg")} height={150} width={150} alt="delivery"></Image>
            </div>
            <div className="flex-grow ">
              <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl  mb-3 group-hover:text-myOrange">
                Money Back Guarenty
              </h2>
              <p className="capitalize  text-base line-clamp-2 leading-7 [&:not(:first-child)]:mt-6">
                free services for shoping above $1000 and gets free delivery
                around the world.Money back guarenty within 30 days.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center group">
            <div className="w-150 150 inline-flex items-center justify-center  rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
             <Image src={require("@/app/fonts/phone.jpeg")} height={150} width={150} alt="delivery"></Image>
            </div>
            <div className="flex-grow ">
              <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl  mb-3 group-hover:text-myOrange">
                 24/7 Services
              </h2>
              <p className=" capitalize text-base line-clamp-2 leading-7 [&:not(:first-child)]:mt-6">
                awailable 24/7 services all around the world you can contact our main offices.
                around the world.Enjoy our free delivery offer and order know.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
