import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./SingleProduct.css";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import {
  getDiscountPercent,
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../utils";
import { useAuth } from "../../context/AuthContext";
import { Loader } from "../../component/Loader/Loader";

export const SingleProduct = () => {
  const [singleProductData, setSingleProductData] = useState({});
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const { productState, productDispatch } = useContext(ProductContext);
  const { token } = useAuth();
  const navigate = useNavigate();

  const { products, cart, wishlist } = productState;
  let currentProduct = products?.find((product) => product._id === productId);

  const inCart = cart.find((cartItem) => cartItem._id === currentProduct._id);
  const inWishlist = wishlist.find(
    (wishlistItem) => wishlistItem._id === currentProduct._id
  );

  useEffect(() => {
    const fetchCurrentProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/products/${productId}`);
        setLoading(false);
        setSingleProductData(data.product);
      } catch (error) {
        console.log("Error in fetching products", error);
      }
    };
    fetchCurrentProducts();
  }, [productId]);

  currentProduct = currentProduct ?? singleProductData;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="dp_row justifycenter aligncenter pdngtb5 single-section">
          <div className="single-card" key={currentProduct?._id}>
            <div className="left-part">
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="product-image"
              />
            </div>
            <div className="dp_row dp_rowdir_clmn right-part">
              <div className="dp_row dp_rowdir_clmn card-top">
                <h2 className="card-title">{currentProduct.title}</h2>
                <div className="justifycenter card-rating">
                  <span>{currentProduct.rating}</span>
                  <i className="fa fa-star"></i>
                </div>
                <div className="card-price">
                  <span className="price-now pl-0-5">
                    ₹{currentProduct.discountedPrice}
                  </span>
                  <span className="price-before pl-0-5">
                    ₹{currentProduct.price}
                  </span>
                  <span className="discount pl-0-5">
                    {" "}
                    {getDiscountPercent(
                      currentProduct.price,
                      currentProduct.discountedPrice
                    )}
                    %
                  </span>
                </div>
              </div>

              <div className="card-tags">
                <div>
                  <i className="fa-solid fa-check"></i> 7 Days Money Back
                  Guarantee
                </div>
                <div>
                  <i className="fa-solid fa-check"></i> Cash on Delivery
                  Available
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
                    <span>
                      {currentProduct.categoryName.charAt(0).toUpperCase() +
                        currentProduct.categoryName.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              {inCart ? (
                <Link className="btn" to="/cart">
                  Go to Cart
                </Link>
              ) : (
                <button
                  className="btn primary-btn-solid"
                  onClick={() => {
                    addToCart(currentProduct, productDispatch, token, navigate);
                  }}
                >
                  Add to Cart
                </button>
              )}
              <button
                className={`like-icon ${inWishlist ? "liked" : ""}`}
                onClick={() => {
                  inWishlist
                    ? removeFromWishlist(
                        currentProduct._id,
                        productDispatch,
                        token
                      )
                    : addToWishlist(
                        currentProduct,
                        productDispatch,
                        token,
                        navigate
                      );
                }}
              >
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
