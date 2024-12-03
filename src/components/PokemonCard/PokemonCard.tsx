import { PokemonCardProps } from "./PokemonCardTypes";
import { TypesColors } from "../../utils/Themes/TypeColors";
import { 
  CardContainer, 
  CardLeft,
  CardRight,
  SpanTag,
  TypesContainer
} from "./PokemonCardStyle";

const PokemonCard = ({pokemon}: PokemonCardProps) => {
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
    <CardContainer pokemon={pokemon}>
      <CardLeft>
        <SpanTag>
          {pokemon.name}
        </SpanTag>
        <TypesContainer>
          {pokemon.types.map((type) => (
            <SpanTag style={{ backgroundColor:  getColor(type.type.name, "bright")}}>
              {type.type.name}
            </SpanTag>
          ))}
        </TypesContainer>
      </CardLeft>
    </CardContainer>
  )
}

export default PokemonCard;