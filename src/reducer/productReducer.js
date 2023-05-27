import { ACTION_TYPE } from "../utils/constants";
export const productReducer = (productState, action) => {
  const { type, payload } = action;

  let categoryData = {};

  switch (type) {
    case ACTION_TYPE.INITIAL_DATA:
      return { ...productState, products: payload };

    case ACTION_TYPE.INITIALIZE_CATEGORY:
      categoryData = action.payload.reduce(
        (catObj, catItem) => ({
          ...catObj,
          [catItem.categoryName]: false,
        }),
        {}
      );
      return {
        ...productState,
        selectedCategory: {
          ...categoryData,
        },
      };

    case ACTION_TYPE.ADD_TO_CART:
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

    case ACTION_TYPE.INC_QTY:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case ACTION_TYPE.DEC_QTY:
      return {
        ...productState,
        cart: [...action.payload],
      };

    case ACTION_TYPE.PRICE_CHANGE:
      return {
        ...productState,
        priceRange: action.payload,
      };
    case ACTION_TYPE.CATEGORY_CHANGE:
      const newSelectedCategory = {
        ...productState.selectedCategory,
        ...action.payload,
      };
      return {
        ...productState,
        selectedCategory: newSelectedCategory,
      };

    case ACTION_TYPE.RATING_CHANGE:
      return {
        ...productState,
        rating: action.payload,
      };
    case ACTION_TYPE.SORT_BY:
      return {
        ...productState,
        sortBy: action.payload,
      };
    case ACTION_TYPE.CLEAR_ALL:
      return {
        ...productState,
        products: [...productState.products],
        priceRange: 3999,
        selectedCategory: categoryData,
        sortBy: "",
        rating: "",
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...productState,
        searchText: payload,
      };

    default:
      return productState;
  }
};
