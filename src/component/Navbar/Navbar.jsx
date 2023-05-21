import { Link } from "react-router-dom";
import navbarLogo from "../../logos/navbarLogo.png";

import "./Navbar.css";
import {
  faHeart,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export const Navbar = () => {
  const { cart, wishlist } = useContext(ProductContext);
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

          <div className="deskview">
            <div className="nav_search">
              <input type="text" className="search_bar" placeholder="Search" />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon_search"
              />
            </div>
          </div>
          <div className="navConatinerRight">
            <ul className="dp_row aligncenter justify-contentspace btn_link">
              <li className="nav_explore_link">
                <Link to="/product" className="explore_btn">
                  Explore
                </Link>
              </li>
              <li className="nav_explore_link">
                <button className="btn_secondary">
                  <Link to="/login">Login</Link>
                </button>
              </li>
              <li>
                <div className="btn_icon">
                  <div className="btn_icon_propery">
                    <Link to="/cart">
                      <FontAwesomeIcon
                        className="btn_icon_navlink"
                        icon={faCartShopping}
                      />
                      {cart && cart.length}
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="btn_icon">
                  <div className="btn_icon_propery">
                    <Link to="/wishlist">
                      <FontAwesomeIcon
                        className="btn_icon_navlink"
                        icon={faHeart}
                      />
                      {wishlist && wishlist.length}
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mobview">
          <div className="nav_search">
            <input type="text" className="search_bar" placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_search" />
          </div>
        </div>
      </nav>
    </>
  );
};
