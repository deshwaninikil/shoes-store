import { Link } from "react-router-dom";
import navbarLogo from "../../logos/navbarLogo.png";

import "./Navbar.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { SearchBar } from "../SearchBar/SearchBar";

export const Navbar = () => {
  const { productState } = useContext(ProductContext);
  const { cart, wishlist } = productState;
  const { token } = useAuth();

  return (
    <>
      <nav className="dp_flexmob flexclmn_onlyMob nav_container">
        <div className="dp_row aligncenter dp_justifycontentspcbet nav_desktop">
          <div className="dp_row aligncenter nav_left_logo">
            <div className="dp_row aligncenter logo_container">
              <div className="dp_row dp_rowdir_clmn aligncenter justifycenter curPoint nav_logo">
                <Link to="/">
                  <img
                    className="navbar_logo"
                    src={navbarLogo}
                    alt="HeaderLogo"
                  />
                  <small>Shoes-Store</small>
                </Link>
              </div>
            </div>
          </div>

          <div className="nav_deskview">
            <SearchBar />
          </div>
          <div className="navConatinerRight">
            <ul className="dp_row aligncenter justify-contentspace btn_link">
              <li className="nav_explore_link">
                <Link to="/product" className="explore_btn">
                  Explore
                </Link>
              </li>
              <li className="nav_explore_link">
                {token ? (
                  <Link to="/profile">
                    <UserAvatar />
                  </Link>
                ) : (
                  <button className="btn_secondary">
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </li>
              <li>
                <div className="btn_icon">
                  <div className="btn_icon_propery">
                    <Link to="/cart">
                      <span className="badge-wrapper">
                        <i className="fas fa-shopping-cart btn_icon_navlink"></i>
                        {cart.length > 0 && (
                          <span className="dp_row justifycenter aligncenter badge-count">
                            {cart.length}
                          </span>
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn_icon">
                  <div className="btn_icon_propery">
                    <Link to="/wishlist">
                      <span className="badge-wrapper">
                        <i className="fas fa-heart btn_icon_navlink"></i>
                        {wishlist.length > 0 && (
                          <span className="dp_row justifycenter aligncenter badge-count">
                            {wishlist.length}
                          </span>
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav_mobview">
          <SearchBar />
        </div>
      </nav>
    </>
  );
};
