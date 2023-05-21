import axios from "axios";

export const getWishlistItemsService = (token) => {
  return axios.get("/api/user/wishlist", {
    headers: { authorization: token },
  });
};

export const addItemToWishlistService = ({ product, token }) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: { authorization: token },
    }
  );
};

export const removeItemFromWishlistService = ({ productId, token }) => {
  return axios.delete(`/api/user/wishlist/${productId}`, {
    headers: { authorization: token },
  });
};
