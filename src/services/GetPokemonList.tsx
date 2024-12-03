import axios from "axios";

export const getPokemonList = async (offset: number, limit: number) => {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  try {
    const request = await axios.get(API_URL);
    return request.data.results;
  } catch (error) {
    console.error(error);
  }
}