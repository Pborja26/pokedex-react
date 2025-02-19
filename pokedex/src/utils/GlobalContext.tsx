import * as types from "./Global.types";
import React, { createContext, useState } from "react";
import { useTypeColor } from "./useTypeColor";

interface IPokedexContext {
    offset: number;
    setOffset: React.Dispatch<React.SetStateAction<number>>;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    pokemons: types.IPokemon[];
    setPokemons: React.Dispatch<React.SetStateAction<types.IPokemon[]>>;
    HandleColor: (type?: string, variant?: "main" | "bright") => string | undefined;
}

export const GlobalContext = createContext({} as IPokedexContext);

interface PokedexContextProps {
    children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<PokedexContextProps> = ({ children }) => {
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(20);
    const [pokemons, setPokemons] = useState<types.IPokemon[]>([]);

    function HandleColor(type?: string, variant?: "main" | "bright") {
        return useTypeColor(type, variant)
    }

    return (
        <GlobalContext.Provider
            value={{
                offset,
                setOffset,
                limit,
                setLimit,
                pokemons,
                setPokemons,
                HandleColor
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
} 