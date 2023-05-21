import axios from "axios";

export const getCartItemsService = (token) => {
  return axios.get("/api/user/cart", {
    headers: { authorization: token },
  });
};

export const addItemToCartService = ({ product, token }) => {
  return axios.post(
    "/api/user/cart",
    { product },
    {
      headers: { authorization: token },
    }
  );
};

export const removeItemFromCartService = ({ productId, token }) => {
  return axios.delete(`/api/user/cart/${productId}`, {
    headers: { authorization: token },
  });
};

export const updateCartItemService = ({ productId, actionType, token }) => {
  return axios.post(
    `/api/user/cart/${productId}`,
    {
      action: {
        type: actionType === "INC_QTY" ? "increment" : "decrement",
      },
    },
    {
      headers: { authorization: token },
    }
  );
};
