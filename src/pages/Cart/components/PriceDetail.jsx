import { Link } from "react-router-dom";

import { totalPrice, totalDiscount, totalAmount } from "../../../utils";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

export const PriceDetail = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { cart } = productState;
  return (
    <div className="price-detail-section">
      <div className="price-detail-header">
        <h4 className="text-grey">Price Details</h4>
      </div>
      <div className="border-bottom"></div>
      <div className="price-deatil-body">
        <div className="price-div">
          <div className="items-price">
            <div className="left-deatil">Price ({cart.length} items) </div>
            <div className="right-detai">₹{totalPrice(cart)}</div>
          </div>
          <div className="items-discount">
            <div className="left-deatil">Discount</div>
            <div className="right-detai">− ₹{totalDiscount(cart)}</div>
          </div>
          <div className="items-delivery">
            <div className="left-deatil">Delivery Charges</div>
            <div className="right-detai">FREE</div>
          </div>
        </div>

        <div className="total-price-div">
          <div className="dp_row dp_justifycontentspcbet total-amt font-semibold">
            <div className="left-deatil">Total Amount</div>
            <div className="right-detai">{totalAmount(cart)}</div>
          </div>
        </div>
      </div>
      <div className="dp_row dp_rowdir_clmn aligncenter price-detail-footer">
        <div className="footer-note font-semibold">
          You will save ₹{totalPrice(cart) - totalAmount(cart)} on this order
        </div>

        <Link className="btn primary-btn-solid font-bold" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};
