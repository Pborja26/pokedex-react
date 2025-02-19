import { IPokemon } from "../../utils/Global.types";

export interface PokemonCardProps {
    pokemon?: IPokemon;
    onClick?: () => void;
    color?: string;
    justify?: string;
    aling?: string;
    width?: number;
}