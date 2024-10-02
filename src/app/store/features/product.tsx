

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/store'
import { Product } from '@/app/utils/types'
import { product } from '@/app/utils/mock'

 
// Define the initial state using that type
const initialState: Product[] = product

export const ProductSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   
  },
})

export const { } = ProductSlice.actions

export default ProductSlice.reducer