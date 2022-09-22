import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonsAll: [],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fecthPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    const pokemonsRes = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
    );

    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      console.log("action", action);
      state.pokemons = action.payload;
      state.pokemonsAll = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      const currentPokemonAllIndex = state.pokemonsAll.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      console.log("currentPokemonIndex", currentPokemonIndex);
      console.log("currentPokemonAllIndex", currentPokemonAllIndex);

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemonsAll[currentPokemonIndex].favorite;        
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }

      if (currentPokemonAllIndex >= 0) {
        const isFavorite = state.pokemonsAll[currentPokemonAllIndex].favorite;
        state.pokemonsAll[currentPokemonAllIndex].favorite = !isFavorite;
      }
    },
    setFiltered: (state, action) => {
      const pokemonsFiltered = state.pokemonsAll.filter(pok => pok.name.includes(action.payload));
      state.pokemons = pokemonsFiltered;
    }
  },
});

export const { setFavorite, setPokemons, setFiltered } = dataSlice.actions;
console.log("dataSlice", dataSlice);

export default dataSlice.reducer;
