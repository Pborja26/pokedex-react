interface Itype {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

interface IStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

interface Imove {
    name: string;
    url: string;
}

interface Isprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        }
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        }
    }
}

interface Icries {
    latest: string | null;
    legacy: string | null;
}

interface Iabilities {
    slot: number;
    ability: {
        name: string;
        url: string;
    }
}

export interface IPokemon {
    id: number;
    name:string;
    height: number;
    weight:number;
    types: Itype[];
    stats: IStat[];
    sprites: Isprites;
    moves: Imove[];
    cries: Icries;
    abilities: Iabilities[];
}