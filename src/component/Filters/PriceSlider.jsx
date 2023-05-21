export const PriceSlider = () => {
  return (
    <div className="filter-price filter-type">
      <div className="slider-container">
        <input
          className="slider"
          id="sliderRange"
          type="range"
          min="100"
          max="1000"
        />
        <div className="slider-value">
          Products within ₹<span className="fw-600">0</span>
        </div>
      </div>
    </div>
  );
};
