"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import SlugComponent from "@/components/SlugComponent";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { addItems, addToCArd } from "@/app/store/features/cart";
import AddTocardToast from "@/components/addTocardToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const products = useAppSelector((state) => state.product);
  const slug = products.filter((value) => value.slug == params.slug);
  // const dispatch =useDispatch();
  const [cartItems, setcartItems] = useState<any>({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image,
    slug: slug[0].slug,
    price: slug[0].price,
    discount: slug[0].discount,
    colors: slug[0].colors,
    category: slug[0].category,
    size: slug[0].size,
    qty: slug[0].qty,
  });

  //  console.log(slug ,"slug is rendering ")
  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5  mx-auto flex flex-wrap jsutify-center items-center ">
          {/* image  */}
          <span>
            <SlugComponent img={slug[0].image} />
          </span>
          <div className="lg:w-1/2  w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="capitalize text-sm title-font text-gray-500 tracking-widest">
              {cartItems.category}
            </h2>
            <h1 className=" capitalize scroll-m-20 text-2xl font-bold text-myBlackHead lg:text-3xl mb-1">
              {cartItems.slug}
            </h1>
            {/* ratongs */}
            <div className="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* descriptions */}
            <p className="leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara   lg:text-lg">
              {cartItems.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa recusandae, enim eveniet maxime, sapiente
              quod dolore voluptas veritatis consequuntur perferendis fugiat id
              reiciendis officia nisi odio minus repudiandae ab quae. Find all
              kind of womens top here. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex space-x-1">
                {/* color  */}
                <span className="mr-3 text-lg font-semibold text-myBlackHead">
                  Color
                </span>
                {slug[0].colors.map((color: string) => (
                  <button
                    className={`border-2 active:border-myBlackHead border-gray-300  rounded-full w-6 h-6 focus:outline-none
                       `}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      setcartItems({ ...cartItems, colors:color })
                    }
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 text-lg font-semibold text-myBlackHead">
                  Size
                </span>

                {/* size select */}
                <div>
                  <select
                    className="select w-full max-w-xs "
                    onChange={(e) =>
                      setcartItems({ ...cartItems, size: e.target.value })
                    }
                  >
                    <option disabled selected>
                      Select Size
                    </option>
                    {slug[0].size.map((item: string, i: number) => (
                      <option key={i}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* quantity */}
            <div className="flex justify-center items-center  mb-3 w-full max-w-[220px]">
              <h3 className="scroll-m-20 text-bs text-myBlackHead font-semibold tracking-normal">
                Quantity
              </h3>
              <Button
                variant={"default"}
                className="flex ml-auto h-fit w-fit hover:bg-black hover:text-white bg-black text-white border-0   focus:outline-none   rounded group"
                onClick={() =>
                  setcartItems({
                    ...cartItems,
                    qty: cartItems.qty <= 1 ? 1 : cartItems.qty - 1,
                  })
                }
              >
                <FiMinus className="mr-2 h-4 w-4 group-hover:text-myOrange group-hover:animate-bounce " />{" "}
              </Button>
              <div className=" mx-auto scroll-m-20 text-bs font-semibold tracking-normal text-myBlackHead">
                {cartItems.qty}
              </div>
              <Button
                variant={"default"}
                className="flex ml-auto  h-fit w-fit hover:bg-black hover:text-white bg-black text-white border-0    focus:outline-none   rounded group"
                onClick={() =>
                  setcartItems({ ...cartItems, qty: cartItems.qty + 1 })
                }
              >
                <FiPlus className="mr-2 h-4 w-4 group-hover:text-myOrange group-hover:animate-bounce " />{" "}
              </Button>
            </div>
            {/* prize */}
            <div className="flex">
              <span
                className={`title-font font-medium text-2xl text-myBlackHead ${
                  cartItems.discount > 0 && "line-through decoration-myOrange"
                }`}
              >
                Price :${cartItems.price * cartItems.qty}
              </span>
              <span className="ml-4 title-font font-medium text-2xl text-myBlackHead">
                $
                {cartItems.price * cartItems.qty -
                  (cartItems.price * cartItems.qty * cartItems.discount) / 100}
              </span>
              <AddTocardToast cartItems={cartItems} className="flex ml-5" />
            </div>
            <Button
              variant={"default"}
              className="flex ml-auto hover:bg-black hover:text-white bg-black text-white border-0 py-2 px-6 focus:outline-none   rounded group mt-3 w-full"
            >
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange group-hover:animate-bounce " />
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
