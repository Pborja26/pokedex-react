import axios from "axios";

export const fetchPokemonsList = async (offset: number, limit: number) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    try {
        const request = await axios.get(URL);
        return request.data?.results;
    } catch (error) {
        console.error(error);
    }
}

export const fetchPokemonByNameId = async (param:  string | number) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${param}`;
    try {
        const request = await axios.get(URL);
        return request;
    } catch (error) {
        console.error(error);
    }
}
