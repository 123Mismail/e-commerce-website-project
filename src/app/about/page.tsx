
import React from 'react'
//  will ne back soon 
const About = () => {
  return (
    <div>
   <div className="text-center  ">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
           About us
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
           We have a large chain of clothe shops.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-tr-3xl rounded-bl-3xl"
        src="/shop.avif"
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
         RANA BROTHERS CLOTHES
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
        RANA BROTHERS CLOTHES
        </h1>
        
        <p className="leading-relaxed text-base">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus illo maiores corporis odit, reiciendis corrupti, tempora voluptates laboriosam eius nisi velit at et dicta. A laborum iusto corporis eaque fugit!
        </p>
         <h4 className='text-gray-900/80 text-3xl title-font font-medium mb-1'>Our Branches</h4>
        
            <li>Main bazar Khaplu</li>
            <li>Haideri Markete Khaplu Staqpixhar</li>
            <h4 className='text-gray-900/80 text-3xl title-font font-medium mb-1'>Our Services</h4>
            <li>Ready mate suits of all size of mens</li>
            <li>Ready on suits Order under a weak</li> 
            <li>All kind of stitching related stuffs available</li> 
            <li>Reasonable Price</li> 
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About