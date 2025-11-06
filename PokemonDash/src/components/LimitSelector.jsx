const LimitSelector = ({ limit, onLimitChange }) => {
  return (
    <div className="controls">
      <label htmlFor={limit}>Show: </label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="500">500</option>
      </select>
    </div>
  );
};

export default LimitSelector;
