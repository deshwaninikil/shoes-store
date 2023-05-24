import { ACTION_TYPE } from "./constants";
import {
  addItemToCartService,
  removeItemFromCartService,
  updateCartItemService,
  removeItemFromWishlistService,
} from "../services";
import { removeFromWishlist } from "./wishlist";

const { ADD_TO_CART, REMOVE_FROM_CART, INC_QTY, DEC_QTY } = ACTION_TYPE;
export const addToCart = async (product, productDispatch, token, navigate) => {
  if (token) {
    try {
      const {
        data: { cart },
      } = await addItemToCartService({ product, token });
      console.log("wishlist", cart);
      productDispatch({
        type: ADD_TO_CART,
        payload: cart,
      });
      //   toast.success("Product added to Cart!");
    } catch (error) {
      console.error(error);
    }
  } else {
    // toast.error("Login to Continue");
    console.log("Login to Continue");
    navigate("/login");
  }
};

export const removeFromCart = async (
  productId,
  productDispatch,
  token,
  clearCart
) => {
  try {
    const {
      data: { cart },
    } = await removeItemFromCartService({ productId, token });
    productDispatch({
      type: REMOVE_FROM_CART,
      payload: cart,
    });
    // clearCart === false && toast.success("Product removed from Cart!");
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
  addToCart(product, productDispatch, token);
  removeFromWishlist(product._id, productDispatch, token);
};
