import { ACTION_TYPE } from "./constants";
import {
  addItemToCartService,
  removeItemFromCartService,
  updateCartItemService,
  removeItemFromWishlistService,
} from "../services";
import { removeFromWishlist } from "./wishlist";
import { toast } from "react-toastify";

const { ADD_TO_CART, REMOVE_FROM_CART, INC_QTY, DEC_QTY } = ACTION_TYPE;
export const addToCart = async (
  product,
  productDispatch,
  token,
  navigate,
  type
) => {
  if (token) {
    try {
      const {
        data: { cart },
      } = await addItemToCartService({ product, token });
      productDispatch({
        type: ADD_TO_CART,
        payload: cart,
      });
      if (!type !== "MOVE_TO_CART") toast.success("Product added to Cart!");
    } catch (error) {
      console.error(error);
    }
  } else {
    toast.error("Login to Continue");
    navigate("/login");
  }
};

export const removeFromCart = async (
  productId,
  productDispatch,
  token,
  type
) => {
  try {
    const {
      data: { cart },
    } = await removeItemFromCartService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_CART,
      payload: cart,
    });
    if (type !== "MOVE_TO_WISHLIST") toast.warning("Deleted from Cart!");
  } catch (error) {
    console.error(error);
  }
};

export const updateCartItem = async (
  productId,
  productDispatch,
  actionType,
  token
) => {
  try {
    const {
      data: { cart },
    } = await updateCartItemService({ productId, actionType, token });
    productDispatch({
      type: actionType === "INC_QTY" ? INC_QTY : DEC_QTY,
      payload: cart,
    });
  } catch (error) {
    console.error(error);
  }
};

export const moveToCart = (product, productDispatch, token) => {
  addToCart(product, productDispatch, token, "", "MOVE_TO_CART");
  removeFromWishlist(product._id, productDispatch, token, "MOVE_TO_CART");
};

export const clearCart = (cart, productDispatch, token) => {
  cart.map((product) =>
    removeFromCart(product.productId, productDispatch, token, true)
  );
};
