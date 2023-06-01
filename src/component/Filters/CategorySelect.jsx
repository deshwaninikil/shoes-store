import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ACTION_TYPE } from "../../utils/constants";

export const CategorySelect = () => {
  const { productState, productDispatch } = useContext(ProductContext);

  return (
    <div className="filter-category filter-type">
      <div className="font-bold filten-main">Categories</div>
      <ul className="list stacked-list">
        {Object.entries(productState.selectedCategory).map((item) => {
          const [categoryName, isCategory] = item;
          return (
            <li key={categoryName}>
              <label>
                <input
                  type="checkbox"
                  name={categoryName}
                  value={categoryName}
                  checked={isCategory}
                  onChange={(e) =>
                    productDispatch({
                      type: ACTION_TYPE.CATEGORY_CHANGE,
                      payload: { [categoryName]: e.target.checked },
                    })
                  }
                />
                <span className="pl-0-5">
                  {`${categoryName.charAt(0).toUpperCase()}${categoryName.slice(
                    1
                  )}`}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
