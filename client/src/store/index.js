import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProductCardReducer from './reducers/ProductCardReducer';
import SaleReducer from './reducers/SaleReducer';
import ProductDetailsReducer from './reducers/ProductDetailsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    productCardState: ProductCardReducer,
    saleState: SaleReducer,
    detailState: ProductDetailsReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
