import { ACTION_TYPE } from "./constants";
import {
  addItemToWishlistService,
  removeItemFromWishlistService,
} from "../services";
import { removeFromCart } from "./cart";
const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = ACTION_TYPE;

export const addToWishlist = async (
  product,
  productDispatch,
  token,
  navigate
) => {
  if (token) {
    try {
      const {
        data: { wishlist },
      } = await addItemToWishlistService({ product, token });
      productDispatch({
        type: ADD_TO_WISHLIST,
        payload: wishlist,
      });
    } catch (error) {
      console.error(error);
    }
  } else {
    navigate("/login");
  }
};

export const moveToWishlist = (product, productDispatch, token) => {
  addToWishlist(product, productDispatch, token);
  removeFromCart(product._id, productDispatch, token);
};

export const removeFromWishlist = async (productId, productDispatch, token) => {
  try {
    const {
      data: { wishlist },
    } = await removeItemFromWishlistService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: wishlist,
    });
  } catch (error) {
    console.error(error);
  }
};
