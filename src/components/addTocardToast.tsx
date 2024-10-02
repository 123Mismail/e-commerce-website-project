import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addToCArd } from "@/app/store/features/cart";
import { FiShoppingCart } from "react-icons/fi";

const AddTocardToast = ({cartItems}:any) => {
  const dispatch = useDispatch();
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
      
    });

  return (<>
    <div className="w-fit"
    onClick={() => dispatch(addToCArd(cartItems))}
    >
      {/* <button onClick={notify}>Notify!</button>
 */}
      <Button
        onClick={notify}
        variant={"default"}
        className="flex   ml-9 hover:bg-black hover:text-white bg-black text-white border-0 py-2 px-6 focus:outline-none   rounded group"
      >
        <FiShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange group-hover:animate-bounce " />{" "}
        Add to card
      </Button>
     
    </div>
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
    </>
  );
};

export default AddTocardToast;
