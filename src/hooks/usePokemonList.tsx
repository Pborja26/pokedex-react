import { fetchPokemonsList, fetchPokemonByNameId } from "../services/fetchPokemonServices";

export function usePokemonList() {
    const pokemonNamesURLsList = async (offset: number, limit: number) => {
        try {
            const request = await fetchPokemonsList(offset, limit);
            return request;
        } catch (error) {
            console.error(error);
        }
    }

    const pokemonDetails = async (id: number | string) => {
        try {
            const request = await fetchPokemonByNameId(id);
            return request?.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        pokemonNamesURLsList,
        pokemonDetails
    }
}