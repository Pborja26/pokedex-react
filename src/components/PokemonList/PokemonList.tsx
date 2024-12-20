import { getPokemonDetails } from "../../services/GetPokemonDetails";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../utils/Context/GlobalContext";
import { Pokemon } from "../../utils/GlobalTypes/GlobalTypes";
import PokemonCard from "../PokemonCard/PokemonCard";
import { ListContainer } from "./PokemonListStyle";

const PokemonList = () => {
  const {offset, setOffset, limit, setLimit, pokemons, setPokemons} = useContext(GlobalContext);
  const isMounted = useRef(false);
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        if (isMounted.current) {
          return
        }
        isMounted.current = true
        const request = await getPokemonDetails(offset, limit);
        if (Array.isArray(request)) {
          const newPokemons: Pokemon[] = request.map((pokemon) => ({
            name: pokemon.name,
            id: pokemon.id,
            types: pokemon.types,
            sprites: pokemon.sprites
          }));
          setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, [limit, offset, setPokemons])

  return (
    <ListContainer>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </ListContainer>
  )
}

export default PokemonList;