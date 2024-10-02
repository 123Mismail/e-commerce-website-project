"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useAppDispatch } from "@/app/store/hooks";
import { addItems, deleteCArd, minusItems } from "@/app/store/features/cart";

const CartCard = () => {
  const cardData = useAppSelector((items): any => items.cart);
  

  const dispatch = useAppDispatch();

  return (
    <div className="     flex flex-col       items-center  mr-20 ">
      {/* image */}
      {cardData.length >= 1 &&
        cardData.map((card: any, id: number) => (
          <>
            <div
              key={card.id}
              className=" flex justify-between gap-x-64 mb-5 gap-y-10 items-center "
            >
              <div className="flex">
                <Image
                  src={card.image && card.image[0]}
                  height={100}
                  width={100}
                  alt={card.title}
                  className="h-[100px] w-[100px] object-contain"
                />
                <div className="pl-7">
                  <h2 className="scroll-m-20 text-lg -mt-2  font-semibold tracking-tight">
                    {card.title}
                  </h2>
                  <p className="scroll-m-20 text-sm mb-1 font-semibold tracking-tight">
                    Size:&nbsp;{card.size}
                  </p>
                  <p className="scroll-m-20 text-sm mb-1 font-semibold tracking-tight">
                    Color:&nbsp;
                    <button
                      className={`border-2 active:border-myBlackHead border-gray-300  rounded-full w-3 h-3 focus:outline-none
                       `}
                      style={{ backgroundColor: card.color }}
                    />
                  </p>
                  <div className="space-x-3 ">
                    <Button
                      variant={"default"}
                      className="bg-myBlackHead text-myWhite group hover:text-myBlackHead h-fit w-fit "
                      onClick={() => dispatch(minusItems(card))}
                    >
                      <FaMinus className="text-base" />
                    </Button>
                    <span>{card.qty}</span>
                    <Button
                      variant={"default"}
                      className="bg-myBlackHead text-myWhite group hover:text-myBlackHead h-fit w-fit "
                      onClick={() => dispatch(addItems(card))}
                    >
                      <FaPlus className="text-base" />
                    </Button>

                    {/* price and delete dive */}
                    <div className="inline lg:hidden  ">
                      <h3 className="scroll-m-20 text-base  mt-2 font-semibold tracking-tight ">
                        Price : &#36;
                        {(card.price - (card.price * card.discount) / 100) *
                          card.qty }
                      </h3>
                      <Button
                        className="bg-myBlackHead text-myWhite hover:text-myBlackHead mt-2 px-10"
                        onClick={() => dispatch(deleteCArd(card.id))}
                      >
                        Delete
                      </Button>
                    </div>
                    {/*  price*/}
                  </div>
                </div>
              </div>
              {/* price and delete dive  */}
              <div className="hidden lg:inline  ">
                <h3 className="scroll-m-20 text-base mb-1 font-semibold tracking-tight">
                  Price :{card.price - (card.price * card.discount) / 100}
                </h3>
                <Button
                  className="bg-myBlackHead text-myWhite hover:text-myBlackHead mt-6 px-10"
                  onClick={() => dispatch(deleteCArd(card.id))}
                >
                  Delete
                </Button>
              </div>
              {/* price and delete dive */}
            </div>
          </>
        ))}
    </div>
  );
};

export default CartCard;
