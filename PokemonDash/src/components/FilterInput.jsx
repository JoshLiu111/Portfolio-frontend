const FilterInput = ({ filter, onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        placeholder="🔍 Filter pokemons by name,order or type"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
