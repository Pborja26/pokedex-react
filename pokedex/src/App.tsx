import { useEffect, useContext } from 'react';
import { useFetch } from './utils/useFetch';
import { GlobalContext } from './utils/GlobalContext';
import * as comp from "./components/compIndex";

function App() {
  const { getPokemonDetails, getPokemonSearch } = useFetch();
  const {
    setPokemons,
    pokemons,
    offset,
    limit
  } = useContext(GlobalContext);

  useEffect(() => {
    const fetch = async () => {
      const request = await getPokemonDetails(offset, limit);
      if (request) {
        setPokemons(prev => (request))
      }
    }
    fetch()
  }, [limit, offset])

  console.log(limit);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",
        height: "100vh",
        width: "100vw"
      }}>
      <comp.Headder>
        <comp.PokemonList> 
          {pokemons.map((pokemon) => (
            <comp.PokemonCard 
              key={pokemon.id} 
              pokemon={pokemon} 
              onClick={() => console.log(pokemon)}
            />
          ))}
        </comp.PokemonList>
      </comp.Headder>
    </div>
  );
}

export default App;
