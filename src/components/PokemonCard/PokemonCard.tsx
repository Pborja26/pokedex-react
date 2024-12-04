import { PokemonCardProps } from "./PokemonCardTypes";
import { TypesColors } from "../../utils/Themes/TypeColors";
import { useContext } from "react";
import { GlobalContext } from "../../utils/Context/GlobalContext";
import { 
  CardContainer, 
  CardLeft,
  CardRight,
  SpanTag,
  TypesContainer,
  Sprite
} from "./PokemonCardStyle";

const PokemonCard = ({pokemon}: PokemonCardProps) => {
  const { setSelectedId } = useContext(GlobalContext);
  const getColor = (type: string, variant: string) => {
    const color = TypesColors(type);
    switch (variant) {
      case "main":
        return color?.main
      case "bright":
        return color?.bright
    }
  }

  return (
    <CardContainer 
      pokemon={pokemon}
      onClick={() => setSelectedId(pokemon.id)}
      style={{
        backgroundColor: getColor(pokemon.types[0].type.name, "main")
      }}
    >
      <CardLeft>
        <SpanTag>
          {pokemon.name}
        </SpanTag>
        <TypesContainer>
          {pokemon.types.map((type) => (
            <SpanTag 
              style={{ 
                backgroundColor:  getColor(type.type.name, "bright")
                }}
              >
              {type.type.name}
            </SpanTag>
          ))}
        </TypesContainer>
      </CardLeft>
      <CardRight>
        <SpanTag>
          # {pokemon.id}
        </SpanTag>
        <Sprite 
          src={pokemon.sprites.other.dream_world.front_default}
        />
      </CardRight>
    </CardContainer>
  )
}

export default PokemonCard;