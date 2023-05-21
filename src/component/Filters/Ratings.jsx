export const Ratings = () => {
  const ratings = [1, 2, 3, 4];
  return (
    <div className="filter-ratings filter-type">
      <div className="font-bold">Ratings</div>
      <ul className="list stacked-list">
        {ratings.reverse().map((rating) => (
          <li key={rating}>
            <label>
              <input type="radio" name="rating" value={rating} readOnly />
              {rating} ★ & above
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
