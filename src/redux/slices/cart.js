
import {Slice, createSlice} from "@reduxjs/toolkit";
import { cartApi } from "../../mocks/cart";
const initialState = {
    cart:{},
}


const slice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        getCart(state,action){
            let data = {...action.payload.data}
            console.log(data)
         state.cart = data
        },
        updateCart(state,action){
            let data = action.payload.data
        state.cart = {...state.cart, ...data}
        },
        deleteCart(state,action){
         let data = action.payload.data;
         state.cart = {}
        },
        createCart(state,action){
            let data = action.payload.data;
            state.cart = {}
        },
        postCart(state, action) {
            state.cart = action.payload.data; 
            
        },
        
    }

});

export const {reducer} = slice

export const getCart = () => async (dispatch) =>{
    const result = await cartApi.getCart();
    if(result){
        await dispatch(slice.actions.getCart(result))
        return true
    }
    return false
}


export const updateCart = (data,id)=> async (dispatch) =>{
    console.log(data)
    const result = await cartApi.updateCart(data,id);
    console.log(result)
    if(result){
        await dispatch(slice.actions.updateCart(result))
        return true
    }
    return false
    
}

export const createCart = (data) => async (dispatch) =>{
    const result = await cartApi.createCart(data);
    if(result){
        await dispatch(slice.actions.createCart(result))
        return true
    }
    return false

}

export const postCart = (data) => async (dispatch) => {
    try {
        const result = await cartApi.postCart(data);
        if (result) {
            dispatch(slice.actions.postCart(result)); 
            return true;
        }
        dispatch(slice.actions.postCart({}));
        return false;
    } catch (error) {
        console.error("Error posting product:", error);
        return false;
    }


};

export const deleteCart = (data)=> async (dispatch) =>{
    const result = await cartApi.deleteCart(data);
    if(result){
        await dispatch(slice.actions.deleteCart(result))
        return true
    }
    return false
    
};



export default slice;
