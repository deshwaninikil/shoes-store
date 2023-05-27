import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ACTION_TYPE } from "../../utils/constants";

export const SortBy = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const { SORT_BY, HIGH_TO_LOW, LOW_TO_HIGH } = ACTION_TYPE;
  return (
    <div className="filter-sort filter-type">
      <div className="font-bold">Sort By</div>
      <ul className="list stacked-list">
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              checked={productState.sortBy === HIGH_TO_LOW}
              onChange={() =>
                productDispatch({
                  type: SORT_BY,
                  payload: ACTION_TYPE.HIGH_TO_LOW,
                })
              }
            />
            <span className="pl-0-5">Price- High to Low</span>
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="sort"
              checked={productState.sortBy === LOW_TO_HIGH}
              onChange={() =>
                productDispatch({
                  type: SORT_BY,
                  payload: ACTION_TYPE.LOW_TO_HIGH,
                })
              }
            />
            <span className="pl-0-5">Price- Low to High</span>
          </label>
        </li>
      </ul>
    </div>
  );
};
