import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductCard.css";
import {
  addToCart,
  removeFromWishlist,
  addToWishlist,
  getDiscountPercent,
} from "../../utils";
import { useAuth } from "../../context/AuthContext";

export const ProductCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { cart, wishlist } = productState;
  const {
    _id,
    image,
    rating,
    description,
    title,
    discountedPrice,
    price,
    in_stock,
  } = product;
  const navigate = useNavigate();

  const inWishlist = wishlist.find((wishlistItem) => wishlistItem._id === _id);

  const preventClick = (e) => {
    e.preventDefault();
  };

  const inCart = cart.find((cartItem) => cartItem._id === _id);
  const { token } = useAuth();
  return (
    <Link
      to={`/singleProduct/${product._id}`}
      className={`dp_row dp_rowdir_clmn card ${in_stock ? "" : "ecomm-card"}`}
      onClick={in_stock ? "" : preventClick}
    >
      <div className="card-head">
        <div className="image-badge-div">
          <img src={image} alt="card-pic" className="product-image" />
        </div>
      </div>

      <div className="dp_row dp_rowdir_clmn card-body">
        <div className="card-title">{description}</div>

        <button
          className={`like-icon ${inWishlist ? "liked" : ""}`}
          onClick={(e) => {
            inWishlist
              ? removeFromWishlist(product._id, productDispatch, token)
              : addToWishlist(product, productDispatch, token, navigate);
            e.preventDefault();
          }}
        >
          <i className="fas fa-heart"></i>
        </button>
        <div className="card-text">{title}</div>
        <div className="dp_row aligncenter dp_justifycontentspcbet card-bottom">
          <div className="card-price">
            <span className="price-now pl-0-5">₹{discountedPrice}</span>
            <span className="price-before pl-0-5">₹{price}</span>
            <span className="discount pl-0-5">
              {" "}
              {getDiscountPercent(price, discountedPrice)}%
            </span>
          </div>
          <div className="dp_row aligncenter card-rating">
            <span>{rating}</span>
            <i className="fa fa-star"></i>
          </div>
        </div>
        {inCart ? (
          <Link className="btn" to="/cart">
            Go to Cart
          </Link>
        ) : (
          <button
            className="btn primary-btn-solid"
            onClick={(e) => {
              addToCart(product, productDispatch, token, navigate);
              e.preventDefault();
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};
