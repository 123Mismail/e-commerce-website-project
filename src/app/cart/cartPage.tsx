"use client"
 
import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAppSelector } from "../store/hooks";
 
const CartPage = () => {
    const carts =useAppSelector((value)=>value.cart);
  
      const totals= carts.reduce((total,arr)=>{
        return Math.floor(total + (arr.price -(arr.price*arr.discount/100))*arr.qty)
      },0)
 
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
    {/* items  */}
    <div className="col-span-2 mt-[40px] mb-[40px] "> 

        <CartCard/>
    </div>
    {/* summary of price */}
    <div className="bg-myBlackHead/5   p-3 rounded-lg">
      {/* order summary */}
      <div className="flex justify-center items-center mt-1 mb-1">
        <h1 className="uppercase scroll-m-20 text-myBlackHead text-xl font-bold tracking-tight lg:text-2xl">
          {" "}
          order summary
        </h1>
      </div>
      {/* divider */}
      <div className="divider w-[93%] mx-auto mt-0 mb-1"></div>
      {/* subtotol */}
      <div className="flex justify-between items-center pl-2 pr-2">
        <p className="scroll-m-20 text-base font-semibold tracking-tight">Sub Totals</p>
        <p className="scroll-m-20 text-base font-semibold tracking-tight">{totals}</p>
      </div>
      {/* delivery charges */}
      <div className="flex justify-between items-center pl-2 pr-2">
        <p className="scroll-m-20 text-base font-semibold tracking-tight">Delivery Charges</p>
        <p className="scroll-m-20 text-base font-semibold tracking-tight">200</p>
      </div>
      {/* sales tax */}
      <div className="flex justify-between items-center pl-2 pr-2">
        <p className="scroll-m-20 text-base font-semibold tracking-tight">Sales Tax</p>
        <p className="scroll-m-20 text-base font-semibold tracking-tight">10%</p>
      </div>
      {/* divider */}
      <div className="divider w-[93%] mx-auto mt-0 mb-1"></div>
      {/* grand totals */}
      <div className="flex justify-between items-center pl-2 pr-2">
        <p className="uppercase scroll-m-20 text-lg font-semibold tracking-tight">Total</p>
        <p className="scroll-m-20 text-base font-semibold tracking-tight">{totals-(totals/100) +200}</p>
      </div>
      {/* divider */}
      <div className="divider w-[93%] mx-auto mt-0 mb-1"></div>
      {/* proceed to checkout */}
      <div className="flex justify-center items-center w-[50%] mx-auto ">
        
       <Button className="w-full rounded-lg hover:text-myBlackPara bg-myBlackHead text-myWhite">
          Check Out
        </Button>
       
      </div>
      {/* divider */}
      <div className="divider w-[93%] mx-auto mt-0 mb-1"></div>
      <p className="text-center  w-[93%] mt-3 border-l-2  italic pl-6">{`*Delivery charges and sales tax wil be calculated in the check out page`}</p>
    </div>
  </div>
  )
}

export default CartPage