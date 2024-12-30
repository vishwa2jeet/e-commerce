import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'
import rootSaga from './saga'
// import productsReducer from './slices/productsSlice';
// import productsSaga from './sagas/productsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store=configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);
