// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { keyframes } from '@emotion/react';
import PokemonList from './components/pokemonList/pokemonList';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {

  return (
    <div className="App">
      {/* <CatchingPokemonIcon sx={{
        animation: `${spin} 1s linear infinite`,
        fontSize: 40, 
      }}/> */}
      <PokemonList/>
    </div>
  );
}

export default App;
