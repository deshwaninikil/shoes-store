import { useNavigate } from "react-router-dom";
import { ACTION_TYPE } from "../../utils/constants";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export const SearchBar = () => {
  const { productDispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const searchChangeHandler = (e) => {
    productDispatch({
      type: ACTION_TYPE.SEARCH,
      payload: e.target.value,
    });
    navigate("/product");
  };

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <>
      <div className="nav_search">
        <input
          type="text"
          className="search_bar"
          placeholder="Search"
          onChange={debounce(searchChangeHandler, 500)}
        />
        <i className="fa-solid fa-magnifying-glass icon_search"></i>
      </div>
    </>
  );
};
