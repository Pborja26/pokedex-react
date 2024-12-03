import axios from "axios";
import { getPokemonList } from "./GetPokemonList";

interface pokemon {
  name: string;
  url: string;
}

export const getPokemonDetails = async (offset: number, limit: number) => {
  try {
    const pokemonList = await getPokemonList(offset, limit);
    const pokemonDetails = Promise.all(
      pokemonList.map(async (pokemon: pokemon) => {
          const detailRequest = await axios.get(pokemon.url);
          return detailRequest.data;
      })
    );
    return pokemonDetails;
  } catch (error) {
    console.error(error);
  }
}