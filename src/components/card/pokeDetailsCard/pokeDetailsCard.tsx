import Container from "../../container/container";
import Badge from "../../badge/badge";
import Image from "../../image/image";
import { PokeDetailsCardProps } from "./pokeDetailsCard.types";

const PokeDetailsCard = ({
    pokemon
}: PokeDetailsCardProps) => {
    return (
        pokemon ? (
            <Container 
                direction="row"
                background_color="lightgray"
                style={{ boxShadow: "0px 4px 8px 0px #000" }}
            >
                <Container direction="column">
                    <Badge label={pokemon.name} />
                    <Image src={pokemon.sprites.other.dream_world.front_default} />
                </Container>
            </Container>
        ) : null
    )
};

export default PokeDetailsCard;
