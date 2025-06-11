import { INameUrl } from "./baseType.types";

type Iabilities = {
    ability: INameUrl;
    is_hidden: boolean;
    slot: number;
}

type Icries = {
    latest: string;
    legacy: string;
}

type Igame_indices = {
    game_index: number;
    version: INameUrl;
}

type Imoves = {
    move: INameUrl;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: INameUrl[];
        order: number | null;
        version_group: INameUrl;
    }[]
}

type IheldItems = {
    item: INameUrl;
    version_details: {
        rarity: number;
        version: INameUrl;
    }[];
}

type Isprites = {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string;
            front_female: string | null;
        },
        home: {
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
        },
        showdown: {
            back_default: string;
            back_female: string | null;
            back_shiny: string;
            back_shiny_female: string | null;
            front_default: string;
            front_female: string | null;
            front_shiny: string;
            front_shiny_female: string | null;
        }
    }
}

type Ipast_types = {
    generation: INameUrl;
    types: {
        slot: number;
        type: INameUrl;
    }[];
}

type Istats = {
    base_stat: number;
    effort: number;
    stat: INameUrl;
}

type Itypes = {
    slot: number;
    type: INameUrl;
}

export interface IPokemon {
    abilities: Iabilities[];
    cries: Icries;
    forms: INameUrl[];
    game_indices: Igame_indices[];
    held_items: IheldItems[];
    moves: Imoves[];
    past_abilities: [];
    past_types: Ipast_types[];
    species: INameUrl;
    sprites: Isprites;
    stats: Istats[];
    types: Itypes[];
    base_experience: number;
    height: number;
    id: number;
    order: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    weight: number
}
