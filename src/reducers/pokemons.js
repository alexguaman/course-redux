import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/types";

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.action.payload, // action.action, porque se usa un midleware q modifica el listado
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_FAVORITE:
      const newPokemonList = [ ...state.pokemons ];
      console.log("newPokemonList", newPokemonList);
      const currentPokemonIndex = newPokemonList.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex < 0){
        return state;
      }

      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
      return {...state, pokemons: newPokemonList};
    default:
      return state;
  }
};
