import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import {
  removeFromCart,
  moveToWishlist,
  updateCartItem,
  getDiscountPercent,
} from "../../../utils";
import { useAuth } from "../../../context/AuthContext";

export const CartProduct = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { wishlist, cart } = productState;
  const { token } = useAuth();

  const updateQtyHandler = (productId, actionType) =>
    updateCartItem(productId, productDispatch, actionType, token);

  return (
    <div className="cart-items-container">
      {cart.map((product) => {
        const {
          image,
          rating,
          description,
          title,
          category,
          discountedPrice,
          price,
          qty,
        } = product;
        const inWishlist = wishlist?.find(
          (wishlistItem) => wishlistItem._id === product._id
        );

        return (
          <div key={product._id}>
            <div className="product-conatiner">
              <div className="dp_row cart-item">
                <div className="item-image">
                  <img className="responsive-img" src={image} alt="product" />
                </div>
                <Link
                  to={`/singleProduct/${product._id}`}
                  className="item-details"
                >
                  <div className="item-title">{description}</div>
                  <div className="item-subtitle">{title}</div>
                  <div className="card-price">
                    <span className="price-now">₹{discountedPrice * qty}</span>
                    <span className="price-before"> ₹{price * qty}</span>
                    <span className="discount">
                      {" "}
                      {getDiscountPercent(price, discountedPrice)}%
                    </span>
                  </div>
                  <div className="coupon-details font-bold">
                    No coupons & offers applied
                  </div>
                </Link>
                <div className="delivery-info font-bold">
                  Delivery by Sun Aug 6{" "}
                </div>
              </div>

              <div className="dp_row aligncenter cart-options">
                <div className="dp_row justifycenter aligncenter quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQtyHandler(product._id, "DEC_QTY")}
                    disabled={qty === 1}
                  >
                    -
                  </button>
                  <span className="text-align qantity-value">{qty}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQtyHandler(product._id, "INC_QTY")}
                  >
                    +
                  </button>
                </div>
                <div className="dp_row cart-actions">
                  {inWishlist ? (
                    <Link className="btn primary-btn-outline" to="/wishlist">
                      Already in Wishlist
                    </Link>
                  ) : (
                    <div
                      className="btn primary-btn-outline"
                      onClick={() =>
                        moveToWishlist(product, productDispatch, token)
                      }
                    >
                      Add to Wishlist
                    </div>
                  )}
                  <div
                    className="btn cartBtn"
                    onClick={() =>
                      removeFromCart(product._id, productDispatch, token)
                    }
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>
          </div>
        );
      })}
    </div>
  );
};
