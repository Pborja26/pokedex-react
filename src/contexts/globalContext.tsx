import { createContext, useState } from "react";
import { IPokemon } from "../types/pokemon.types";

interface IGlobalContext {
    tab: number;
    setTab: React.Dispatch<React.SetStateAction<number>>;
    pokemons: IPokemon[];
    setPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
    offset: number;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
    const [tab, setTab] = useState<number>(0);
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(151);
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [filter, setFilter] = useState<string>("");

    return (
        <GlobalContext.Provider
            value={{
                tab,
                setTab,
                pokemons,
                setPokemons,
                offset,
                setOffset,
                limit,
                setLimit,
                filter,
                setFilter
            }}
        >
            {children}
        </GlobalContext.Provider>
    )

}