type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

type PokemonSprites = {
  others: {
    dream_world: {
      front_default: string;
    }
  }
}

export interface Pokemon {
  name: string;
  id: number;
  types: PokemonType[];
  sprite: PokemonSprites;
}