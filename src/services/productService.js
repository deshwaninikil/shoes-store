// export const getAllProductService = async () => {
//   const response = await fetch("/api/products");
//   const data = await response.json();
//   return data;
// };

import axios from "axios";

export const getAllProductService = () => {
  return axios.get("/api/products");
};
