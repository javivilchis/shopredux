import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async(dispatch) => {
    const result = await fetch("/api/products");
    dispatch({
          type: FETCH_PRODUCTS,
          payload: result.data
    })
}