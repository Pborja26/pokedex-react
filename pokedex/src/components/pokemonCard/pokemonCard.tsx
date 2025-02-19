import * as styled from "./pokemonCard.style"
import { PokemonCardProps } from "./pokemonCard.types"
import { useContext } from "react"
import { GlobalContext } from "../../utils/GlobalContext"

const PokemonCard = ({
    pokemon,
    onClick
}: PokemonCardProps) => {
    const {
        HandleColor
    } = useContext(GlobalContext);

    return (
        <styled.Container
            onClick={onClick}
            color={HandleColor(pokemon?.types?.[0].type.name, "main")}
        >
            <styled.HalfCard
                aling="center"
                justify="center"
                width={40}
            >
                <styled.Span>
                    {pokemon?.name}
                </styled.Span>
                <styled.HalfCard
                    aling="center"
                    justify="center"
                    width={100}
                >
                    {pokemon?.types.map((type) => (
                        <styled.Span
                            key={type.slot}
                            color={HandleColor(type.type.name, "bright")}
                        >
                            {type.type.name}
                        </styled.Span>
                    ))}
                </styled.HalfCard>
            </styled.HalfCard>
            <styled.HalfCard
                aling="end"
                justify="center"
                width={60}
            >
                <styled.Span>
                    #{pokemon?.id}
                </styled.Span>
                <styled.Img 
                    src={pokemon?.sprites.other.dream_world.front_default || ""}
                />
            </styled.HalfCard>
        </styled.Container>
    )
}

export default PokemonCard;
