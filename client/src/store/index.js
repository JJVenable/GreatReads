import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProductCardReducer from './reducers/ProductCardReducer';
import NewSaleCardReducer from './reducers/NewSaleCardReducer';
import ProductLineReducer from './reducers/ProductLineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers({
    productCardState: ProductCardReducer,
    newSaleCardState: NewSaleCardReducer,
    productLineState: ProductLineReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
