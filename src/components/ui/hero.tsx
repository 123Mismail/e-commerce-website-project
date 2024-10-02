
import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { Button } from './button';
const Hero = () => {
  return (
    <div>
      <div
  className="hero min-h-[90vh] custom-img  bg-center bg-fixed bg-no-repeat ">
 
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold text-myWhite">Shop By Your <span className='text-myOrange'> Choice</span></h1>
      <p className="mb-5 capitalize text-base font-medium text-myWhite">
        decorate your wirdrobr with new silk and smooth design 
        with our latest collections.
      </p>
      <Button className='outline outline-offset-2 outline-myWhite outline-1 group hover:rounded-2xl duration-300  hover:outline-myOrange'>
      <FaShoppingBag className="mr-2 h-5 w-5 group-hover:text-myOrange group-hover:animate-bounce" /> Shop now
    </Button>

    </div>
  </div>
</div>
    </div>
  )
}

export default Hero