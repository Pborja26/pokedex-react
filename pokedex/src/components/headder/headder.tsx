import { Input } from "../compIndex";
import { useState } from "react";
import { useFetch } from "../../utils/useFetch";
import * as styled from "./headder.style";

interface HeadderProps {
    children: React.ReactNode;
}

const Headder = ({
    children
}: HeadderProps) => {
    const [filter, setFilter] = useState<string | number>("");
    const { getPokemonSearch } = useFetch();

    const handleKeydown = async (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            const fetch = await getPokemonSearch(filter);
            console.log(fetch)
        } 
    }

    document.addEventListener("keydown", handleKeydown)

    return (
        <styled.Container>
            <styled.UpperContainer>
                <Input 
                    type="text" 
                    value={filter} 
                    setValue={(e) => setFilter(e)}
                />
            </styled.UpperContainer>
            {children}
            <styled.LowerContainer>
                
            </styled.LowerContainer>
        </styled.Container>
    )
}

export default Headder;
