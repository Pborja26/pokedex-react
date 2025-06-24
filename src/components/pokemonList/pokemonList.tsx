import PokemonCard from "../card/pokemonCard/pokemonCard";
import { useContext, useEffect, useState } from "react";
import { INameUrl, IPokemon } from "../../types/typesIndex";
import { ListContainer } from "./pokemonList.style";
import { GlobalContext } from "../../contexts/globalContext";
import { usePokemonList } from "../../hooks/usePokemonList";
import PokeDetailsCard from "../card/pokeDetailsCard/pokeDetailsCard";

const PokemonList = () => {
    const { pokemons, setPokemons, offset, limit } = useContext(GlobalContext);
    const { pokemonNamesURLsList, pokemonDetails } = usePokemonList();
    const [selectedPoke, setSelectedPoke] = useState<IPokemon | null>(null);

    useEffect(() => {
      pokemonNamesURLsList(offset, limit).then((data) => {
        data.forEach((url: INameUrl) => {
          pokemonDetails(url.name).then((data: IPokemon) => {
            setPokemons((prev) => [...prev, data])
          })
        });
      })
    }, [offset, limit]);
    console.log(selectedPoke)
    return (
        <ListContainer>
            {Array.isArray(pokemons) ? pokemons.sort((a, b) => a.id - b.id).map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => setSelectedPoke(pokemon)} />
            )) : null}
            {selectedPoke && (
              <PokeDetailsCard pokemon={selectedPoke} setPokemon={() => setSelectedPoke(null)} onClose={() => setSelectedPoke(null)} />
            )}
        </ListContainer>
    )
};

export default PokemonList;
