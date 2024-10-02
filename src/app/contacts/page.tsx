
import React from 'react'
  // will be back soon here again 
const Contacts = () => {
  return (
    <div>
       <div className="text-center mt-10">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl   ">
            Contact
          </h1>
          <p className="capitalize pt-2 text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          contact us our team is 24/7 available for solving your queries.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.386285729607!2d67.09091933654068!3d24.856093868789326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c017e6da1a7%3A0xa5f6b3a346f9797c!2zTHVja3kgQWZyaWRpIFJkLCDZhdmG2LjZiNixINqp2KfZhNmI2YbbjCBNYW56b29yIENvbG9ueSwg2qnYsdin2obbjCwg2LbZhNi5INqp2LHYp9qG24wsINiz2YbYr9q-2Iwg2b7Yp9qp2LPYqtin2YY!5e0!3m2!1sur!2s!4v1727815911499!5m2!1sur!2s"
        style={{ filter: "grayScale(0.5) contrast(1.4) opacity(0.7)" }}
      />
      <div className="bg-white relative flex flex-wrap     py-6 rounded shadow-md">
        <div className="lg:w-1/2  px-6 ">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Address
          </h2>
          <p className="mt-1 capitalize">
           i sector manzoor colony karachi pakistan 
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">musafirbaltistani786@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03483144231</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto p-4 w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 mb-1 title-font scroll-m-20 text-xl font-bold tracking-tight lg:text-3xl">
        Contact us
      </h2>
      <p className="leading-relaxed mb-5 text-gray-900 text-base  font-medium">
        We are availabe at all socila media platforms like Linkdin , facebook ,twitter and instagram you can also email us by following .
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7  text-gray-900 text-base  font-medium">
          Name
        </label>
        <input
        required
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 text-gray-900 text-base  font-mediumfocus:border-indigo-500 focus:ring-2 focus:ring-indigo-200   outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-gray-900 text-base  font-medium">
          Email
        </label>
        <input
        required
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 text-gray-900 text-base  font-medium focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-gray-900 text-base  font-medium">
          Message
        </label>
        <textarea
        required
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 text-gray-900 text-base  font-mediumfocus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32  outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
         Submit
      </button>
       
    </div>
  </div>
</section>


    </div>
  )
}

export default Contacts