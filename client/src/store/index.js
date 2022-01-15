import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProductCardReducer from './reducers/ProductCardReducer';
// import SaleReducer from './reducers/SaleReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    productCardState: ProductCardReducer
    // saleState: SaleReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
