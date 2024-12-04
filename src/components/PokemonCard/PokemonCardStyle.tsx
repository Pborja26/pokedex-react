import styled from "styled-components";
import { PokemonCardProps } from "./PokemonCardTypes";

export const CardContainer = styled.div<PokemonCardProps>`
  display: flex;
  flex-direction: row;
  max-width: 300px;
  height: 150px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);

  &:active{
    transform: translate(1px, 1px);
  }
  &:hover{
    cursor: pointer;
  }
`

export const CardLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
`

export const CardRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;
`

export const SpanTag = styled.span`
  text-transform: capitalize;
  text-align: center;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  font-weight: bold;
`

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Sprite = styled.img`
  max-width: 100%;
  height: 90%;
`