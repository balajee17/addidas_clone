import { Slice, createSlice } from "@reduxjs/toolkit";
import { orderApi } from "../../mocks/order";

const initialState = {
  order: {},
};

const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrder(state, action) {
      let data = { ...action.payload.data };
      console.log(data);
      state.order = data;
    },
    updateOrder(state, action) {
      let data = action.payload.data;
      state.order = { ...state.order, ...data };
    },
    deleteOrder(state, action) {
      let data = action.payload.data;
      state.order = {};
    },
    createOrder(state, action) {
      let data = action.payload.data;
      state.order = {};
    },
    postOrder(state, action) {
      state.order = action.payload.data;
    },
  },
});

export const { reducer } = slice;

export const getOrder = (id) => async (dispatch) => {
  const result = await orderApi.getOrder(id);
  if (result) {
    await dispatch(slice.actions.getOrder(result));
    return true;
  }
  return false;
};

export const createOrder = (data) => async (dispatch) => {
  const result = await orderApi.createOrder(data);
  if (result) {
    await dispatch(slice.actions.createOrder(result));
    return true;
  }
  return false;
};

export const postOrder = (data) => async (dispatch) => {
  try {
    const result = await orderApi.postOrder(data);
    if (result) {
      dispatch(slice.actions.postOrder(result));
      return true;
    }
    dispatch(slice.actions.postOrder({}));
    return false;
  } catch (error) {
    console.error("Error posting Order:", error);
    return false;
  }
};
