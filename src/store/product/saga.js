import { call, put, takeEvery,all,fork } from 'redux-saga/effects';
import axios from 'axios';

import{
    GET_PRODUCT_LIST,
    GET_PRODUCT_BY_ID,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    PRODUCT_API_ERROR,
} from './actionTypes';

import {
    getProductListSuccess,
    productApiError,
} from './action';

const  fetchProductsApi = () => {
  return  axios.get('https://dummyjson.com/products');
 
};

//Product List
function*  getProductList() {
    try{
        const response = yield call(fetchProductsApi);
        // console.log('API Data', response?.status);
        if (response?.status === 200) {
            
            yield put(getProductListSuccess(response.data.products));
            // callback(response?.data);
            // console.log('XYZ')
          } else {
            yield put(
              noticeApiError(`error with getNoticeById : ${response.status}`)
            );
            console.log('getNoticeById error with status code : ', response.status);
          }  
    } catch(error) { 
        yield put(productApiError(error.message));
    }
}

export function* watchProduct() {
    yield takeEvery(GET_PRODUCT_LIST, getProductList);
  }
  

  export default function* productSaga() {
    yield all([fork(watchProduct)]);
  }
  