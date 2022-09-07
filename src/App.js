import { Col } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails } from "./actions";
import { getPokemon } from "./api";
import PokemonList from "./component/PokemonList";
import Searcher from "./component/Searcher";
import logo from './statics/logo.svg';
import "./App.css";

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const fetchPokemons = async () => {
      const result = await getPokemon();
      dispatch(getPokemonsWithDetails(result));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
