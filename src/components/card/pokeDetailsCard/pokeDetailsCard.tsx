import Container from "../../container/container";
import Badge from "../../badge/badge";
import Image from "../../image/image";
import { BarChart, CatchingPokemon, FormatListBulleted } from '@mui/icons-material';
import { PokeDetailsCardProps } from "./pokeDetailsCard.types";
import { UsePokeTypeColor } from "../../../utils/usePokeTypesColors";
import { Tabs } from "../../baseComponentsIndex";
import { useState } from "react";

const PokeDetailsCard = ({
    pokemon,
    setPokemon,
    onClose
}: PokeDetailsCardProps) => {
    const tabs = [
        {
            id: 0,
            label: "data",
            icon: CatchingPokemon
        },
        {
            id: 1,
            label: "status",
            icon: BarChart
        },
        {
            id: 2,
            label: "moves",
            icon: FormatListBulleted
        }
    ]

    return (
        <Container 
            direction="row"
            background_color="lightgray"
            padding="1rem"
            style={{ 
                boxShadow: "0px 4px 8px 0px #000",
                position: "absolute",
                borderRadius: "1rem"
            }}
        >
            <Container
                direction="column" 
                background_color={UsePokeTypeColor(pokemon.types[0].type.name).main}
                align_items="center"
                justify_content="center"
            >
                <Badge label={`#${pokemon.id} ${pokemon.name}`} />
                <Image src={pokemon.sprites.other.dream_world.front_default} />
            </Container>
            <Container
                direction="row"
                width="200px"

            >
                <Tabs tabs={tabs} selectedTab={(tabID) => console.log(tabID)} />
            </Container>
        </Container>
    )
};

export default PokeDetailsCard;
