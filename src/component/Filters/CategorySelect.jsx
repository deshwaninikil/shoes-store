export const CategorySelect = () => {
  return (
    <div className="filter-category filter-type">
      <div className="font-bold">Categories</div>
      <ul className="list stacked-list">
        <li>
          <label>
            <input type="checkbox" />
            Men
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Women
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Kids
          </label>
        </li>
      </ul>
    </div>
  );
};
