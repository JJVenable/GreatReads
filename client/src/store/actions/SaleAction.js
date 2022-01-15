import { CREATE_SALE } from "../types";
import { CreateSaleService } from "../../services/SaleService";

export const CreateSaleAction = () => {
  return async (dispatch) => {
    try {
      //SaleService hardcoded to 1 below.
      const newSale = await CreateSaleService(1)
      console.log(newSale)
      dispatch({
        type: CREATE_SALE,
        payload: newSale
      })
    } catch (error) {
      throw error;
    }
  }
}
