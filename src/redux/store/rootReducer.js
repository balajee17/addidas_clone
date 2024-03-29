import {reducer as authReducer} from "../slices/auth";
import {combineReducers} from "@reduxjs/toolkit";
import {reducer as productRoutesReducer} from "../slices/product"
import {reducer as cartReducer} from "../slices/cart"
import { reducer as orderReducer } from "../slices/order";


export const rootReducer = combineReducers({
   auth:authReducer, 
   productRoutes:productRoutesReducer,
   cart:cartReducer,
   order:orderReducer,

   
   
   


 
});
