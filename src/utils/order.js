import { addOrdersService, getOrdersService } from "../services";
import { ACTION_TYPE } from "../utils/constants";

export const addOrders = async (orderData, token, orderDispatch) => {
  try {
    const response = await addOrdersService(orderData, token);
    orderDispatch({
      type: ACTION_TYPE.ADD_ORDERS,
      payload: response.data.order,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = async (orderDispatch, token) => {
  try {
    const {
      data: { order },
    } = await getOrdersService(token);
    orderDispatch({
      type: ACTION_TYPE.GET_ORDERS,
      payload: order,
    });
  } catch (error) {
    console.error(error);
  }
};
