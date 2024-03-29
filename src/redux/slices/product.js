import { createSlice } from "@reduxjs/toolkit";
import { productRoutesApi } from "../../mocks/product"; 

const initialState = {
    product: {},
};

const slice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProduct(state, action) {
            state.product = action.payload; 
        },
        postProduct(state, action) {
            state.product = action.payload; 
        },
        
    },
});

export const { reducer } = slice;


export const getProduct = () => async (dispatch) => {
    try {
        const result = await productRoutesApi.getProduct();
        console.log(result);
        if (result) {
            dispatch(slice.actions.getProduct(result)); 
            return true;
        }
        return false;
    } catch (error) {
        console.error("Error fetching product:", error);
        return false;
    }
};

export const postProduct = (page, limit, filter) => async (dispatch) => {
    try {
        const result = await productRoutesApi.postProduct(page,limit,filter);
        if (result) {
            dispatch(slice.actions.postProduct(result)); 
            return true;
        }
        dispatch(slice.actions.postProduct({}));
        return false;
    } catch (error) {
        console.error("Error posting product:", error);
        return false;
    }
};

export default slice;
