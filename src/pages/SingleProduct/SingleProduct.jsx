import { useContext } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { productState, productDispatch } = useContext(ProductContext);

  const { products, cart, wishlist } = productState;
  const currentProduct = products.find((product) => product._id === productId);

  const inCart = cart.find((cartItem) => cartItem._id === currentProduct._id);
  const inWishlist = wishlist.find(
    (wishlistItem) => wishlistItem._id === currentProduct._id
  );
  return (
    <section className="dp_row justifycenter aligncenter pdngtb5 single-section">
      <div className="single-card" key={currentProduct._id}>
        <div className="left-part">
          <img
            src={currentProduct.image}
            alt="product"
            className="product-image"
          />
        </div>
        <div className="dp_row dp_rowdir_clmn right-part">
          <div classNameclmn="dp_row dp_rowdir_clmn card-top">
            <h2 className="card-title">{currentProduct.title}</h2>
            <div className="justifycenter card-rating">
              <span>{currentProduct.rating}</span>
              <i className="fa fa-star"></i>
            </div>
            <div className="card-price">
              <span className="price-now pl-0-5">
                ₹{currentProduct.original_price}
              </span>
              <span className="price-before pl-0-5">
                ₹{currentProduct.price}
              </span>
              <span className="discount pl-0-5">{40}%</span>
            </div>
          </div>

          <div className="card-tags">
            <div>
              <i className="fa-solid fa-check"></i> 7 Days Money Back Guarantee
            </div>
            <div>
              <i className="fa-solid fa-check"></i> Cash on Delivery Available
            </div>
            <div>
              <i className="fa-solid fa-check"></i> All cards accepted
            </div>
          </div>
          <div className="border-bottom"></div>
          <div>
            <span className="font-bold">Product Details</span>
            <div className="dp_row dp_rowdir_clmn  product-details">
              <div className="dp_row detail">
                <span className="deatil-name">Brand: </span>
                <span>{currentProduct.title}</span>
              </div>
              <div className="detail">
                <span className="deatil-name">Description: </span>
                <span>{currentProduct.description}</span>
              </div>
              <div className="detail">
                <span className="deatil-name">Category: </span>
                <span>{currentProduct.category}</span>
              </div>
            </div>
          </div>

          {inCart ? (
            <Link className="btn" to="/cart">
              Go to Cart
            </Link>
          ) : (
            <button
              className="btn"
              onClick={() =>
                productDispatch({
                  type: "ADD_TO_CART",
                  payload: currentProduct._id,
                })
              }
            >
              Add to Cart
            </button>
          )}
          <button
            className={`like-icon ${inWishlist ? "liked" : ""}`}
            onClick={(e) => {
              inWishlist
                ? productDispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: currentProduct._id,
                  })
                : productDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: currentProduct._id,
                  });
              e.preventDefault();
            }}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
