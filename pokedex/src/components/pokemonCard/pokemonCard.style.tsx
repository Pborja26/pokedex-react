import styled from "styled-components";
import { PokemonCardProps } from "./pokemonCard.types";

export const Container = styled.div<PokemonCardProps>`
    min-width: 200px;
    max-width: 250px;
    min-height: 150px;
    max-height: 180px;
    border-radius: 1rem;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    cursor: pointer;
    box-shadow: 0px 4px 8px 0px;

    &:active{
        transform: translate(1px, 1px);
    }
`

export const HalfCard = styled.div<PokemonCardProps>`
    height: 100%;
    width: ${props => props.width}%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.aling};
    justify-content: ${props => props.justify};
    gap: 10px;
`

export const Span = styled.span<PokemonCardProps>`
    font-family: Inter;
    font-weight: 700;
    border-radius: 1rem;
    padding: 5px 10px;
    background-color: ${props => props.color};
    text-transform: capitalize;
`

export const Img = styled.img`
    height: 70%;
    width: 100%;
`