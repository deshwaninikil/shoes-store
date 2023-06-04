import axios from "axios";

export const getAllProductService = () => {
  return axios.get("/api/products");
};
