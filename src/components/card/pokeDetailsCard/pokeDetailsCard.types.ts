import { IPokemon } from "../../../types/pokemon.types";

export interface PokeDetailsCardProps {
    pokemon: IPokemon;
    setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
    onClose: () => void;
}
