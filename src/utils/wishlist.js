import { ACTION_TYPE } from "./constants";
import {
  addItemToWishlistService,
  removeItemFromWishlistService,
} from "../services";
import { removeFromCart } from "./cart";
import { toast } from "react-toastify";
const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = ACTION_TYPE;

export const addToWishlist = async (
  product,
  productDispatch,
  token,
  navigate,
  type
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
      if (!type !== "MOVE_TO_WISHLIST")
        toast.success("Product added to Wishlist!");
    } catch (error) {
      console.error(error);
    }
  } else {
    navigate("/login");
    toast.error("Login to Continue");
  }
};

export const moveToWishlist = (product, productDispatch, token) => {
  addToWishlist(product, productDispatch, token, "", "MOVE_TO_WISHLIST");
  removeFromCart(product._id, productDispatch, token, "MOVE_TO_WISHLIST");
  // toast.warning("Deleted from Wishlist!");
};

export const removeFromWishlist = async (
  productId,
  productDispatch,
  token,
  type
) => {
  try {
    const {
      data: { wishlist },
    } = await removeItemFromWishlistService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: wishlist,
    });
    if (type !== "MOVE_TO_CART") toast.warning("Deleted from Wishlist!");
  } catch (error) {
    console.error(error);
  }
};
