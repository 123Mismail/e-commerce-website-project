
import { configureStore,combineReducers } from '@reduxjs/toolkit'

import ProductSlice  from './features/product'
import  CartSlice  from './features/cart'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cart, product } from '../utils/mock'

const persistConfig = {
  key: 'root',
  version:1,
  storage,
}
const reducer=combineReducers({
  product:ProductSlice,
  cart:CartSlice

})

const persistedReducers = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch