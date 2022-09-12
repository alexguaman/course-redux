import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload) => {
  return {
    type: SET_POKEMONS,
    payload: payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  }
}

export const setFavorite = (payload) => {
  return {
    type: SET_FAVORITE,
    payload: payload,
  }
}

export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  };
