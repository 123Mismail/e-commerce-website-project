
import React from 'react'

const Promotions = () => {
  return (
    <div className='mt-[100px] mb-[100px]'> 
         {/*heading starts  */}
         <div className="text-center mb-20">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
            Promotions
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
           find best deals and latet designs,
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        {/* heading ends */}
        {/* promotion section stasts here */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
{/* first child */}
        <div
  className="hero h-[30rem] promo-1">
   
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-extrabold tracking-tight lg:text-4xl uppercase">Get upto <span className='text-myOrange'>60%</span> off</h1>
      <p className="mb-5 capitalize pt-2 text-lg font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
       get special offers on season clothes come first get first base.
      </p>
       
    </div>
  </div>
</div>
        <div
  className="hero h-[30rem] promo-2  ">
   
  <div className="hero-overlay bg-opacity-30  "></div>
  <div className="hero-content text-neutral-content text-center  ">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-extrabold tracking-tight lg:text-4xl uppercase">Get upto <span className='text-myOrange'>30%</span> off</h1>
      <p className="mb-5 capitalize pt-2 text-lg font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
       get special offers on season clothes come first get first base.
      </p>
       
    </div>
  </div>
</div>
        </div>
   
    </div>
  )
}

export default Promotions