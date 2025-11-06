const Card = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
        <h2>{pokemon.name}</h2>

        <p>Order: {pokemon.order}</p>
      </div>
      <p>Type: {pokemon.types[0].type.name}</p>
      <p>Ability: {pokemon.abilities[0].ability.name}</p>
      <p>
        Height: {pokemon.height / 10} m /{" "}
        {(pokemon.height * 0.1 * 3.28084).toFixed(2)} ft
      </p>
      <p>
        Weight: {pokemon.weight / 10} kg /{" "}
        {((pokemon.weight / 10) * 2.20462).toFixed(0)} lbs
      </p>
    </div>
  );
};

export default Card;
