import React, {useContext} from 'react';
import { GlobalContext, GlobalContextProvider } from './utils/Context/GlobalContext';
import PokemonList from './components/PokemonList/PokemonList';

function App() {

  return (
    <GlobalContextProvider>
      <PokemonList />
    </GlobalContextProvider>
  );
}

export default App;
