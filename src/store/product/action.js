import{
    GET_PRODUCT_LIST,
    GET_PRODUCT_LIST_SUCCESS,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_ID_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    PRODUCT_API_ERROR,
} from './actionTypes';

export const getProductList = (data) => {
    return {
      type: GET_PRODUCT_LIST,
      payload: data,
    };
  };

  export const getProductListSuccess = (data) => {
    return {
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: data,
    };
  };
  export const getProductById = (data) => {
    return {
      type: GET_PRODUCT_BY_ID,
      payload: data,
    };
  };
  export const getProductByIdSuccess = (data) => {
    return {
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    };
  };
  export const addProduct =(data) => {
    return{
        type: ADD_PRODUCT,
        payload: data,
    }
  };

  export const addProductSuccess = (data) => {
    return{
        type: ADD_PRODUCT_SUCCESS,
        payload: data,
    }
  };
  export const updateProduct =(data) => {
    return{
        type: UPDATE_PRODUCT,
        payload: data,
    }
  };

  export const updateProductSuccess = (data) => {
    return{
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
    }
  };
  export const deleteProduct =(data) => {
    return{
        type: DELETE_PRODUCT,
        payload: data,
    }
  };

  export const deleteProductSuccess = (data) => {
    return{
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
    }
  };
  export const productApiError = (error) => {
    return{
        type: PRODUCT_API_ERROR,
        payload: error,
    }
  };

