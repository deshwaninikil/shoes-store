import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * All the routes related to Order are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's orders.
 * send GET Request at /api/user/order
 * */
export const getOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { order: userOrders });
};

/**
 * This handler handles adding items to user's orders.
 * send POST Request at /api/user/order
 * body contains {order}
 * */

export const addOrdersHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    console.log("schema.users: ", schema.users);
    const userOrders = schema.users.findBy({ _id: userId }).orders;
    console.log("userOrders: ", userOrders);
    const { order } = JSON.parse(request.requestBody);
    console.log("order: ", order);
    userOrders.push({
      ...order,
      createdAt: formatDate(),
      updatedAt: formatDate(),
      _id: uuid(),
    });
    console.log("After push");
    this.db.users.update({ _id: userId }, { order: userOrders });
    console.log("db 2");
    this.db.users.update({ _id: userId }, { cart: [] });
    console.log("db 2");
    return new Response(201, {}, { order: userOrders });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
