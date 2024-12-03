import axios from "axios";

export const getFilteredPokemon = async (id: number | string) => {
  const SEARCH_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  try {
    const request = await axios.get(SEARCH_URL);
    return request.data;
  } catch (error) {
    console.error(error);
  }
}