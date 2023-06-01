import "./Cart.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { PriceDetail } from "./components/PriceDetail";
import { CartProduct } from "./components/CartProduct";

export const CartPage = () => {
  const { productState } = useContext(ProductContext);
  const { cart } = productState;
  return (
    <section className="main-cart-section pdngtb5">
      {!cart.length ? (
        <div className="dp_row dp_rowdir_clmn aligncenter empty-container">
          <div className="empty-info">
            Your cart is empty! Add items to it now.
          </div>
          <Link className="btn cartBtn" to="/product">
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="cart-body">
          <div className="dp_row dp_justifycontentspcbet aligncenter cart-product-section">
            <div className="cart-header">
              <h3>My Cart ({cart.length})</h3>
            </div>
            <div className="border-bottom"></div>

            <CartProduct />
          </div>

          <PriceDetail />
        </div>
      )}
    </section>
  );
};
