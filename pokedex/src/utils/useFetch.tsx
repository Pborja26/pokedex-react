import axios from "axios";
import { useCallback, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

interface IPokemonList {
    name: string;
    url: string;
}

export function useFetch() {
    const { offset, limit } = useContext(GlobalContext);

    const getPokemonList = async (offset: number, limit: number) => {
        try {
            const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
            return request.data.results;
        } catch (error) {
            console.error(error);
        }
    };

    const getPokemonDetails = useCallback(async (offset: number, limit: number) => {
        try {
            const list = await getPokemonList(offset, limit);
            const pokemonDetails = Promise.all(
                list.map(async (pokemon: IPokemonList) => {
                    const request = await axios.get(pokemon.url);
                    return request.data;
                })
            );
            return pokemonDetails;
        } catch (error) {
            console.error(error);
        }
    }, [offset, limit]);

    return { getPokemonDetails }
}