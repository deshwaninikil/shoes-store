import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ACTION_TYPE } from "../../utils/constants";

export const PriceSlider = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  return (
    <div className="filter-price filter-type">
      <div className="slider-container">
        <input
          className="slider"
          id="sliderRange"
          type="range"
          min="100"
          max="3999"
          value={productState.priceRange}
          onChange={(e) =>
            productDispatch({
              type: ACTION_TYPE.PRICE_CHANGE,
              payload: e.target.value,
            })
          }
        />
        <div className="slider-value">
          Products within ₹
          <span className="fw-600">{productState.priceRange}</span>
        </div>
      </div>
    </div>
  );
};
