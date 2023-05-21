export const SortBy = () => {
  return (
    <div className="filter-sort filter-type">
      <div className="font-bold">Sort By</div>
      <ul className="list stacked-list">
        <li>
          <label>
            <input type="radio" name="sort" />
            Price- High to Low
          </label>
        </li>
        <li>
          <label>
            <input type="radio" name="sort" />
            Price- Low to High
          </label>
        </li>
      </ul>
    </div>
  );
};
