export type Measurement = 
  `${number}px`
| `${number}rem`
| `${number}%`
| `${number}vw`
| `${number}vh`
| Array< `${number}px` | `${number}rem` | `${number}%` | `${number}vw` | `${number}vh` >;

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

type PokemonSprites = {
  other: {
    dream_world: {
      front_default: string;
    }
  }
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}