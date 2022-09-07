import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, i) => {
        return (
          <PokemonCard
            key={i}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            number={pokemon.number}
            abilities={pokemon.abilities}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
