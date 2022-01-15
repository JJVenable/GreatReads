import { CREATE_SALE } from '../types' 

const iState= { 
  currentSale: {}

}

const SaleReducer = (state= iState, action) => {
  switch(action.type) {
    case CREATE_SALE:
      return { ...state, currentSale:action.payload }
  default:
    return { ...state }
  }


}

export default SaleReducer