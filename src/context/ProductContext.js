import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

import { ACTION_TYPE } from "../utils/constants";
import { productReducer } from "../reducer/productReducer";
import { getAllProductService } from "../services";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const fetchProducts = async () => {
    try {
      const { data } = await getAllProductService();
      productDispatch({
        type: ACTION_TYPE.INITIAL_DATA,
        payload: data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productInitialState = {
    products: [],
    cart: [],
    wishlist: [],
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
