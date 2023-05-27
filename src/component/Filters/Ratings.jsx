import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ACTION_TYPE } from "../../utils/constants";

export const Ratings = () => {
  const { productState, productDispatch } = useContext(ProductContext);
  const ratings = [1, 2, 3, 4];
  return (
    <div className="filter-ratings filter-type">
      <div className="font-bold">Ratings</div>
      <ul className="list stacked-list">
        {ratings.reverse().map((rating) => (
          <li key={rating}>
            <label>
              <input
                type="radio"
                name="rating"
                checked={Number(productState.rating) === rating}
                value={rating}
                onChange={(e) => {
                  productDispatch({
                    type: ACTION_TYPE.RATING_CHANGE,
                    payload: e.target.value,
                  });
                }}
                readOnly
              />
              <span className="pl-0-5">{rating} ★ & above</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
