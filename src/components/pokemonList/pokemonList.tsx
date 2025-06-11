import PokemonCard from "../card/pokemonCard/pokemonCard";
import { useContext, useEffect } from "react";
import { INameUrl, IPokemon } from "../../types/typesIndex";
import { ListContainer } from "./pokemonList.style";
import { GlobalContext } from "../../contexts/globalContext";
import { usePokemonList } from "../../hooks/usePokemonList";

const PokemonList = () => {
    const { pokemons, setPokemons, offset, limit } = useContext(GlobalContext);
    const { pokemonNamesURLsList, pokemonDetails } = usePokemonList();

    useEffect(() => {
      pokemonNamesURLsList(offset, limit).then((data) => {
        data.forEach((url: INameUrl) => {
          pokemonDetails(url.name).then((data: IPokemon) => {
            setPokemons((prev) => [...prev, data])
          })
        });
      })
    }, [offset, limit]);

    return (
        <ListContainer>
            {Array.isArray(pokemons) ? pokemons.sort((a, b) => a.id - b.id).map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            )) : null}
        </ListContainer>
    )
};

export default PokemonList;
