
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





const initialState ={
    productList: [],
    getProductListLoading: false,
    getProductByIdLoading: false,
    addProductLoading: false,
    updateProductLoading: false,
    deleteProductLoading: false,
    error: null,
};

const ProductReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_PRODUCT_LIST :
           state ={
                ...state,
                getProductListLoading: true,
            }
            break;
        case GET_PRODUCT_LIST_SUCCESS :
            // console.log('action?.payload', action?.payload)
            state ={
                ...state,
                productList: action?.payload ?? [],
                getProductListLoading: false,
            };
            // console.log('state', state)
            break;
        case GET_PRODUCT_BY_ID :
            state ={
                ...state,
                getProductByIdLoading: false,
            };
            break;
        case GET_PRODUCT_BY_ID_SUCCESS :
            state ={
                ...state,
                getProductByIdLoading: true,
                productList: action.payload,
            };
            break;
        case ADD_PRODUCT :
            state ={
                ...state,
                addProductLoading: false,
            };
            break;
        case ADD_PRODUCT_SUCCESS :
            state ={
                ...state,
                addProductLoading: true,
                productList: action.payload,
            };
            break;
        case UPDATE_PRODUCT :
            state ={
                ...state,
                updateProductLoading: false,
            };
            break;
        case UPDATE_PRODUCT_SUCCESS :
            state ={
                ...state,
                updateProductLoading: true,
                productList: action.payload,
            };
            break;
        case DELETE_PRODUCT :
            state ={
                ...state,
                deleteProductLoading: false,
            };
            break;
        case DELETE_PRODUCT_SUCCESS :
            state ={
                ...state,
                deleteProductLoading: true,
                productList: action.payload,
            };
            break;
        case PRODUCT_API_ERROR:
                state= {
                   ...state,
                   error: action.payload,
                   getProductListLoading: false,
                   getProductByIdLoading: false,
                   addProductLoading: false,
                   updateProductLoading: false,
                   deleteProductLoading: false,
                   error: null,
                }
            break;
            default:
            state= {...state}
            break;
    }
    return state;
}

export default  ProductReducer;