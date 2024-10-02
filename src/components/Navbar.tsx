 "use client"
 import React from "react";
import Link from "next/link";
import { NavigationMenuDemo } from "./ui/Navlinks";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";
const Navbar = () => {

  const cart=useAppSelector((obj)=>obj.cart);
 
  return (
    <div>
      <div className="navbar bg-myWhite   ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" p-0 lg:hidden">
              <HiMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    <li>
                      <Link href={"/tops"}>Tops</Link>
                    </li>
                    <li>
                      <Link href={"/shoes"}>Shoes</Link>
                    </li>
                    <li>
                      <Link href={"/accesseries"}>Accesseries/Jewellries</Link>
                    </li>
                    <li>
                      <Link href={"/pants"}>Pants</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contacts"}>Contact</Link>
              </li>
            </ul>
          </div>

          <Image
            src={require("@/app/fonts/logo.png")}
            alt="logo"
            width={80}
            height={80}
            className="hidden lg:block"
          />
        </div>
        <div className="navbar-center ">
          <Image
            src={require("@/app/fonts/logo.png")}
            alt="logo"
            width={80}
            height={80}
            className="block lg:hidden"
          />

          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
           
            <div className="flex-none">
            
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle group"
                >
                  {/* card svg */}
                  <Link href={"/cart"}>
                  <div className="indicator  ">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 hover:text-myOrange"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {cart.length > 0 &&   <span className="badge badge-sm  indicator-item  group-hover:text-myOrange">{cart.length}</span>}
                  
                  </div></Link>
                </div>
            
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
