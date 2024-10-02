import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { FiShoppingCart } from "react-icons/fi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAppSelector } from "@/app/store/hooks";
import { useDispatch } from "react-redux";
import { addToCArd } from "@/app/store/features/cart";
import { Slide, ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
const AddBestSelAddtoCard = ({slug}:{slug:string}) => {
    const slugs=useAppSelector((val)=> val.product.find((items)=> items.slug == slug));
    const [cartItems , setcartItems ]=useState<any>({

      id:slugs?.id,
     title:slugs?.title,
     image:slugs?.image,
     slug:slugs?.slug,
     price:slugs?.price,
     discount:slugs?.discount,
     colors:slugs?.colors,
     category:slugs?.category,
     size:slugs?.size,
     qty:slugs?.qty
      
   });
   const dispatch=useDispatch()
   

   const notify = () =>
    toast("🎆🎉✨ Product Added Successully!", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  return (
    <div>
      {" "}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="  rounded-xl  group-hover:bg-myBlackHead group-hover:text-myWhite">
            {" "}
            <FiShoppingCart className="mr-1 h-4 w-4" /> Addto Card
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] z-50 bg-white rounded-lg opacity-100">
          {/* size */}
          <div className="mb-5">
            <select
              className="select w-full max-w-xs "
              onChange={(e) =>
                setcartItems({ ...cartItems, size:e.target.value })
              }
            >
              <option disabled selected>
                Select Size
              </option>
              {slugs?.size.map((item: string, i: number) => (
                <option key={i}>{item}</option>
              ))}
            </select>
          </div>
          <div className="flex space-x-1">
            {/* color  */}
            <span className="mr-3 text-lg font-semibold text-myBlackHead">
              Color
            </span>
            {slugs?.colors.map((color: string ,i) => (
              <button key={i}
                className={`border-2 active:border-myBlackHead border-gray-300  rounded-full w-6 h-6 focus:outline-none
                       `}
                style={{ backgroundColor:color }}
                onClick={() => setcartItems({ ...cartItems, colors:color })}
              />
            ))}
          </div>

          <div className="w-fit" onClick={notify}>
            <Button
              variant={"outline"}
              className="  rounded-xl w-full mt-4   bg-myBlackHead text-white  group-hover:text-myBlackHead "
              onClick={() => dispatch(addToCArd(cartItems))}
            >
              {" "}
              <FiShoppingCart className="mr-1 h-4 w-4" /> Addto Card
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AddBestSelAddtoCard;
