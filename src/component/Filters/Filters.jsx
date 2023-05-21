import { CategorySelect } from "./CategorySelect";
import "./Filters.css";
import { PriceSlider } from "./PriceSlider";
import { Ratings } from "./Ratings";
import { SortBy } from "./SortBy";

export const Filters = () => {
  return (
    <div className="filter-section">
      <div className="filter-block">
        <div className="filter-text dp_row dp_justifycontentspcbet">
          <div className="font-bold">Filters</div>
          <div>
            <span className="clear-all-btn font-semibold">Clear all</span>
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
