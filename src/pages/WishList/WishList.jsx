import { Link } from "react-router-dom";
import "./WishList.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { removeFromWishlist } from "../../utils";

export const WishListPage = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  console.log(productState.cart);
  const { wishlist, cart } = productState;

  return (
    <section className="wishlist-section pdngtb5">
      <div className="dp_row dp_rowdir_clmn wishlist-container">
        {!wishlist.length ? (
          <div className="dp_row aligncenter justifycenter empty-info">
            Empty Wishlist. You have no items in your wishlist. Start adding!
          </div>
        ) : (
          <div>
            <div className="wishlist-header">
              <h3>My Wishlist {wishlist.length}</h3>
            </div>
            <div className="border-bottom"></div>
            <div className="dp_row dp_rowdir_clmn wishlist-items-container">
              {wishlist.map((product) => {
                const inCart = cart.find(
                  (cartItem) => cartItem._id === product._id
                );
                return (
                  <div key={product._id}>
                    <div className="dp_row wishlist-item">
                      <div className="item-image">
                        <img
                          className="responsive-img"
                          src={product.image}
                          alt="product"
                        />
                      </div>
                      <Link
                        to={`/singleProduct/${product._id}`}
                        className="item-details"
                      >
                        <div className="item-title">{product.title}</div>
                        <div className="item-subtitle">
                          {product.description}
                        </div>
                        <div className="card-price">
                          <span className="price-now">
                            {" "}
                            ₹{product.original_price}
                          </span>
                          <span className="price-before">
                            ₹{product.original_price}
                          </span>
                          <span className="discount"> {40}%</span>
                        </div>
                      </Link>
                      <div className="action-items">
                        <div className="move-to-cart">
                          {inCart ? (
                            <Link className="btn" to="/cart">
                              Already in Cart
                            </Link>
                          ) : (
                            <button
                              className="btn"
                              onClick={() => {
                                productDispatch({
                                  type: "ADD_TO_CART",
                                  payload: product._id,
                                });
                                productDispatch({
                                  type: "REMOVE_FROM_WISHLIST",
                                  payload: product._id,
                                });
                              }}
                            >
                              Move to Cart
                            </button>
                          )}
                        </div>
                        <div
                          className="delete-item"
                          onClick={() =>
                            productDispatch({
                              type: "REMOVE_FROM_WISHLIST",
                              payload: product._id,
                            })
                          }
                        >
                          <span className="delete-icon">
                            <i className="fa-solid fa-trash"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
