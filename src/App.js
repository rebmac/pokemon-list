import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function fetchPokemon() {
  return fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=964',
  ).then(x => x.json());
}

function App() {

  const [pokemon, setData] = useState([]);

  useEffect(() => {
    fetchPokemon().then(({results}) => {
      setData(results);
    });
  });

  return <div className="App poke-container">
      { pokemon.map((poke, pokeIndex) => <div className="pokemon-box nes-container with-title">
        <p class="title">{poke.name}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIndex + 1}.png`} />
      </div>) }  
    </div>;

}


export default App;
