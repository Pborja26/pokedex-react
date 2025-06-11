import Image from "../../image/image";
import Badge from "../../badge/badge";
import Container from "../../container/container";
import { IPokemon } from "../../../types/pokemon.types";
import { UsePokeTypeColor } from "../../../utils/usePokeTypesColors";

interface PokemonCardProps {
    pokemon: IPokemon;
    onClick?: () => void;
}

const PokemonCard = ({ pokemon, onClick }: PokemonCardProps) => {
    const handleCardColor = () => {
        const type = pokemon.types.find((type) => type.slot === 1)
        if (type) {
            return UsePokeTypeColor(type.type.name).main;
        } else {
            return ""
        }
    }

    return (
        <Container
            direction="row"
            padding="1rem"
            align_items="center"
            justify_content="center"
            background_color={handleCardColor()}
            width="300px"
            height="150px"
            radius="1rem"
            cursor="pointer"
            click={true}
            onClick={onClick}
            style={{
                boxShadow: "0px 4px 8px 0px #000"
            }}
        >
            <Container
                direction="column"
                align_items="center"
                justify_content="flex-start"
                gap="20px"
                height="100%"
                width="50%"
            >
                <Badge
                    label={pokemon.name}
                    background_color="transparent"
                    color="#000"
                />
                <Container
                    direction="column"
                    gap="10px"
                    align_items="center"
                    justify_content="center"
                    width="100%"
                    height="100%"
                >
                    {pokemon.types.map((type) => (
                        <Badge
                            key={type.slot}
                            label={type.type.name}
                            background_color={UsePokeTypeColor(type.type.name).bright}
                            color="#000"
                        />
                    ))}
                </Container>
            </Container>
            <Container
                direction="column"
                align_items="flex-end"
                justify_content="flex-end"
                height="100%"
                width="50%"
            >
                <Badge
                    label={`#${pokemon.id}`}
                    background_color="transparent"
                    color="#000"
                />
                <Image
                    src={pokemon.sprites.other.dream_world.front_default}
                    width="100%"   
                    height="90%"
                />
            </Container>
        </Container>
    )
}

export default PokemonCard;
