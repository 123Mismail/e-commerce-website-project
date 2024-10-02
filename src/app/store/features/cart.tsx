
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/store'
import { Cart } from '@/app/utils/types'

 
// Define the initial state using that type
const initialState: Cart[] =[]

export const CartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers:{
    addToCArd(state,action){
     const uuid=Math.floor(10000+Math.random()*9000)
     let newJob={...action.payload,uuid}
     state.push(newJob)
    } ,
    deleteCArd(state,{payload}){
      console.log(state,"state value is checking")
      return state.filter((item)=> item.id !==payload )
   
    },
    
    addItems(state, action) {
      // Find the object that matches the id and size
      let objIndex = state.findIndex((val) => 
          val.id === action.payload.id && val.size === action.payload.size
      );
  
      if (objIndex !== -1) {
          // If found, increment the quantity
          state[objIndex].qty++;
      } else {
          // If not found, add the new item with qty set to 1
          const newItem = {
              ...action.payload,
              qty: 1 // Set qty to 1 for the new item
          };
          state.push(newItem);
      }
  
      
  },
  
    // addItems(state,action){
     
    //   let obj= state.find ((val)=>{
    //      val.id == action.payload.id &&
    //      val.size == action.payload.size 
          
    //   }) 
    //   if(obj){
    //     obj.qty++
    //     let newObj=state.filter((item)=> item.id !== obj.id);
    //     return state=[...newObj , obj]
       
    //   }
    //   console.log( action.payload ,"new object is rendering");
    // },
    // addItems(state, action) {
    //   const objIndex = state.findIndex((item) => 
    //     item.id === action.payload.id &&
    //     item.size === action.payload.size &&
    //     item.slug === action.payload.slug
    //   );
    //   if (objIndex !== -1) {
    //     // Increment qty if item already exists
    //     state[objIndex].qty += 1;
    //   } else {
    //     // Add new item with qty = 1 if it doesn't exist
    //     state.push({
    //       ...action.payload,
    //       qty: 1,
    //     })
    //   }},
     
    minusItems(state, action) {
      // Find the index of the object that matches the id and size
      let objIndex = state.findIndex((val) => 
          val.id === action.payload.id && val.size === action.payload.size
      );
  
      if (objIndex !== -1) {
          // If found, decrement the quantity
          if (state[objIndex].qty > 1) {
              state[objIndex].qty--;
          } else {
              // If qty is 1, you might want to remove the item from the cart
              state.splice(objIndex, 1); // Remove the item from the state
          }
      }
  
      console.log(state, "new object is rendering");
  }
  ,
  }
  },
)

export const { addToCArd , deleteCArd ,addItems,minusItems} = CartSlice.actions
export default CartSlice.reducer