import { useContext } from "react";
import {
  getPriceRangeData,
  getCategoryData,
  getRatedData,
  getSortedData,
  getSearchedData,
} from "../utils";
import { ProductContext } from "../context/ProductContext";

export const useFilterHook = () => {
  const { productState } = useContext(ProductContext);

  let filteredData = [...productState.products];

  filteredData = getPriceRangeData(filteredData, productState.priceRange);
  filteredData = getCategoryData(filteredData, productState.selectedCategory);
  filteredData = getRatedData(filteredData, productState.rating);
  filteredData = getSortedData(filteredData, productState.sortBy);
  filteredData = getSearchedData(filteredData, productState.searchText);
  return { filteredData };
};
