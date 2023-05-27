import axios from "axios";

export const getOrdersService = (token) => {
  return axios.get("/api/user/order", { headers: { authorization: token } });
};
export const addOrdersService = async (order, token) => {
  console.log("reponseService 1");
  const reponse = await axios.post(
    "/api/user/order",
    { order },
    { headers: { authorization: token } }
  );
  console.log("reponseService 2", reponse);
  return reponse;
};
