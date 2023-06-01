import "./OrderSummary.css";
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { particles } from "../../utils";
// import { useOrder } from "../../context/order-context.js";
import { OrderContext } from "../../context/OrderContext";

export const OrderSummary = () => {
  const {
    orderState: { orders },
  } = useContext(OrderContext);

  const { orderId } = useParams();

  const order = orders.find((order) => order.orderId === orderId);

  const { paymentId, amount, products } = order || "";

  useEffect(() => {
    order && particles();
  }, [order]);

  return (
    <div className="order-summary-section pdngtb5">
      {!order ? (
        <div className="dp_row dp_rowdir_clmn aligncenter empty-order">
          {" "}
          <h3 className="empty-info">Oops! We lost your order :(</h3>{" "}
          <Link className="btn primary-btn-solid btn cartBtn" to="/product">
            Shop Now
          </Link>{" "}
        </div>
      ) : (
        <>
          {" "}
          <h3 className="fs-1-5">Your order is placed successfully!</h3>
          <div className="order-info">
            <div className="dp_row dp_rowdir_clmn payment-info">
              <span className="font-bold fs-1-25">Order Confirmed</span>

              <div className="dp_row dp_rowdir_clmn details">
                <div>
                  <span className="font-bold mr-0-5">Payment Id:</span>
                  <span>{paymentId}</span>
                </div>
                <div>
                  <span className="font-bold mr-0-5">Order ID:</span>
                  <span>{orderId}</span>
                </div>
                <div>
                  <span className="font-bold mr-0-5">Amount Paid:</span>
                  <span>₹{amount}</span>
                </div>
              </div>
            </div>
            <div className="dp_row dp_rowdir_clmn aligncenter product-info">
              <span className="font-bold fs-1-25">Products Ordered</span>
              <div className="dp_row dp_rowdir_clmn products-div">
                {products?.map((product) => {
                  const { image, price, title, qty } = product;
                  return (
                    <div className="single-product" key={title}>
                      <img src={image} className="product-img" alt={title} />
                      <div className="dp_row dp_rowdir_clmn single-product-right">
                        <div>{title}</div>
                        <div className="product-item">
                          <span className="font-bold">Price:</span>
                          <span>₹{price}</span>
                        </div>
                        <div className="product-item">
                          <span className="font-bold">Qty:</span>
                          <span>{qty}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
