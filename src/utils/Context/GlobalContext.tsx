import React, { createContext, useState, useEffect } from "react";
import { Pokemon } from "../GlobalTypes/GlobalTypes";

interface IPokedexContext {
  limit: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  pokemons: Pokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[]>>
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>
}

export const GlobalContext = createContext({} as IPokedexContext)

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(6);
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [selectedId, setSelectedId] = useState<number>(0);



  return (
    <GlobalContext.Provider value={{
      limit,
      offset,
      setLimit,
      setOffset,
      pokemons,
      setPokemons,
      selectedId,
      setSelectedId
    }} >
      {children}
    </GlobalContext.Provider>
  )
}