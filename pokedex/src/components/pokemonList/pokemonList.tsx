import * as styled from "./pokemonList.style";
import { useEffect, useRef, useContext } from "react";
import { GlobalContext } from "../../utils/GlobalContext";

interface PokemonListProps {
    children?: React.ReactNode;
}

const PokemonList = ({
    children
}: PokemonListProps) => {
    const listRef = useRef<HTMLDivElement>(null)

    const { limit, setLimit } = useContext(GlobalContext);

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                const current = listRef.current.scrollTop;
                const total = listRef.current.scrollHeight;
                if (current >= total / 2) {
                    setLimit(prev => prev + 20);
                }
            }
        };

        const div = listRef.current;
        if (div) {
            div.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (div) {
                div.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <styled.ListContainer
            ref={listRef}
        >
            {children}
        </styled.ListContainer>
    )
};

export default PokemonList;
