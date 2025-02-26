import * as styled from "./pokemonList.style";
interface PokemonListProps {
    children?: React.ReactNode;
}

const PokemonList = ({
    children
}: PokemonListProps) => {

    return (
        <styled.ListContainer>
            {children}
        </styled.ListContainer>
    )
};

export default PokemonList;
