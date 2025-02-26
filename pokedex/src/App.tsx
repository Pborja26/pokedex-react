import { useEffect, useContext } from 'react';
import { useFetch } from './utils/useFetch';
import { GlobalContext } from './utils/GlobalContext';
import * as comp from "./components/compIndex";

function App() {
  const { getPokemonDetails, getEvolutionChain} = useFetch();
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
        setPokemons(prev => [...prev, ...request])
      }
    }
    fetch()
  }, [limit, offset])


  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        height: "100vh",
        width: "100vw"
      }}>
        <div style={{width: "1000px", backgroundColor: "white"}}>

          <comp.StatusBar value={20} title='Attack'/>
        </div>
    </div>
  );
}

export default App;
