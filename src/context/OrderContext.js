import { createContext, useReducer, useEffect } from "react";
import { orderReducer } from "../reducer/orderReducer";
import { useAuth } from "./AuthContext";
import { getOrders } from "../utils";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const { token } = useAuth();
  const [orderState, orderDispatch] = useReducer(orderReducer, { orders: [] });
  useEffect(() => {
    if (token) {
      getOrders(orderDispatch, token);
    }
  }, [token]);
  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
