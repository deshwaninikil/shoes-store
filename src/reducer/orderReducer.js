import { ACTION_TYPE } from "../utils/constants";

export const orderReducer = (orderState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPE.GET_ORDERS:
      return { ...orderState, orders: payload };

    case ACTION_TYPE.ADD_ORDERS: {
      return { ...orderState, orders: payload };
    }
    default:
      return orderState.orders;
  }
};
