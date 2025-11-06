const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By:</label>
      <select
        value={sortBy}
        id="sort"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="order_asc">Order (Ascending)</option>
        <option value="order_desc">Order (Descending)</option>
        <option value="height_asc">Height (Low to High)</option>
        <option value="height_desc">Height (High to Low)</option>
        <option value="weight_asc">Weight (Low to High)</option>
        <option value="weight_desc">Weight (High to Low)</option>
      </select>
    </div>
  );
};

export default SortSelector;
