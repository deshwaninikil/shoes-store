import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CategorySelect } from "./CategorySelect";
import "./Filters.css";
import { PriceSlider } from "./PriceSlider";
import { Ratings } from "./Ratings";
import { SortBy } from "./SortBy";
import { ACTION_TYPE } from "../../utils/constants";

export const Filters = () => {
  const { productDispatch } = useContext(ProductContext);

  return (
    <div className="filter-section">
      <div className="filter-block">
        <div className="filter-text dp_row dp_justifycontentspcbet">
          <div className="font-bold">Filters</div>
          <div>
            <span
              className="clear-all-btn font-semibold"
              onClick={() => productDispatch({ type: ACTION_TYPE.CLEAR_ALL })}
            >
              Clear all
            </span>
          </div>
        </div>
        <PriceSlider />
        <CategorySelect />
        <Ratings />
        <SortBy />
      </div>
    </div>
  );
};
