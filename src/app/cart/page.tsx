 
import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAppSelector } from "../store/hooks";
import CartPage from "./cartPage";

const Cart = () => {


  return (
    // main div
    <div className="mt-[100px] mb-[100px]">
      {/*  container */}
      <CartPage/>
    </div>
  );
};

export default Cart;
