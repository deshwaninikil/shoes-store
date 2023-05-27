import React, { createContext, useEffect, useReducer } from "react";

import { ACTION_TYPE } from "../utils/constants";
import { productReducer } from "../reducer/productReducer";
import { getAllProductService, getAllCategoriesService } from "../services";

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
      console.log("Error in fetching products", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const { data } = await getAllCategoriesService();
      productDispatch({
        type: ACTION_TYPE.INITIALIZE_CATEGORY,
        payload: data.categories,
      });
    } catch (error) {
      console.error("Error in fetching categories", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCategory();
  }, []);

  const productInitialState = {
    products: [],
    cart: [],
    wishlist: [],
    priceRange: 3999,
    selectedCategory: [],
    sortBy: "",
    rating: "",
    searchText: "",
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
