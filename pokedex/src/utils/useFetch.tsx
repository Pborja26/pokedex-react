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

    const getPokemonSearch = useCallback(async (param: string | number) => {
        try {
            const API_URL = `https://pokeapi.co/api/v2/pokemon/${param}`;
            const request = await axios.get(API_URL);
            return request.data;
        } catch (error) {
            console.error(error);
        }
    }, []);

    // TODO criar função para pegar a cadeia de evolução de um pokemon selecionado
    // através de um fetch pela species evolution_chain

    return { getPokemonDetails, getPokemonSearch }
}