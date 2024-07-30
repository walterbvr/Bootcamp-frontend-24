import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import usePokemon from './hooks/usePokemon';
import './App.css';

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const { pokemon } = usePokemon(pokemonId);

  function getRandomPokemon() {
    setPokemonId(Math.floor(Math.random() * 898) + 1);
  }

  return (
    <div className="app">
      <PokemonCard pokemon={pokemon} />
      <button onClick={getRandomPokemon}>Get Random Pokemon</button>
    </div>
  );
}

export default App;
