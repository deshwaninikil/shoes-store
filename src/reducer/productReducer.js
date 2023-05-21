import { products } from "../backend/db/products";
import { ACTION_TYPE } from "../utils/constants";
export const productReducer = (productState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...productState, products: payload };

    case ACTION_TYPE.ADD_TO_CART:
      // const selectedProduct = products.find(({ _id }) => _id === payload);
      return {
        ...productState,

        cart: [...action.payload],
      };

    case ACTION_TYPE.REMOVE_FROM_CART:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case ACTION_TYPE.ADD_TO_WISHLIST:
      return {
        ...productState,
        wishlist: action.payload,
      };

    case ACTION_TYPE.REMOVE_FROM_WISHLIST:
      return { ...productState, wishlist: action.payload };
    // case ACTION_TYPE.REMOVE_FROM_WISHLIST_ADD_TO_CART:
    //   return {
    //     ...productState,
    //     wislist: productState.wishlist.filter(({ _id }) => _id !== payload),
    //     cart: [
    //       ...productState.cart,
    //       productState.wishlist.find(({ _id }) => _id === payload),
    //     ],
    //   };

    default:
      return productState;
  }
};
