import Spinner from "../components/Spinner";
import FilterInput from "../components/FilterInput";
import SortSelector from "../components/SortSelector";
import Card from "../components/Card";
import LimitSelector from "../components/LimitSelector";

const home = ({
  pokemons,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredPokemons = pokemons
    .filter((pokemon) => {
      return (
        pokemon.name.toLowerCase().includes(filter.toLowerCase()) ||
        pokemon.types[0].type.name
          .toLowerCase()
          .includes(filter.toLowerCase()) ||
        pokemon.order.toString().toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "order_asc":
          return a.order - b.order;
        case "order_desc":
          return b.order - a.order;
        case "height_asc":
          return a.height - b.height;
        case "height_desc":
          return b.height - a.height;
        case "weight_asc":
          return a.weight - b.weight;
        case "weight_desc":
          return b.weight - a.weight;
      }
    });
  return (
    <div>
      <h1 className="rainbow-title">Pokémon Dash</h1>
      {loading && <Spinner color="white" />}
      {error && <div className="error">{error}</div>}

      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <LimitSelector limit={limit} onLimitChange={setLimit} />
        <SortSelector sortBy={sortBy} onSortChange={setSortBy} />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <p>No Matching Pokemons</p>
          )}
        </main>
      )}
    </div>
  );
};

export default home;
