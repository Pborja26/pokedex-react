import { IPokemon } from "../../../types/pokemon.types";

export interface PokeDetailsCardProps {
    pokemon: IPokemon | null;
    setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
    onClose: () => void;
}
