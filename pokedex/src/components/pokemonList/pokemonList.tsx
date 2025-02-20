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

    const { limit, setLimit, setOffset } = useContext(GlobalContext);

    useEffect(() => {
        const handleScroll = () => {
            if (listRef.current) {
                const div = listRef.current;
                const current = div.scrollTop;
                const total = div.scrollHeight; 
                const visible = div.clientHeight; 
    
                if (current + visible >= total - 10) {
                    setLimit(prev => prev + 8);
                    setOffset(limit)
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
