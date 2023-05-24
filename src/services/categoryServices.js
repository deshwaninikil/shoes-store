import axios from "axios";

export const getAllCategoriesService = () => {
  return axios.get("/api/categories");
};
