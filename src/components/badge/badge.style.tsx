import styled from "styled-components";
import { BadgeProps } from "./badge.types";

export const BadgeComponent = styled.div<BadgeProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.background_color};
    color: ${(props) => props.color};
    padding: 4px 8px;
    border-radius: 8px;
    font-family: Inter;
    font-weight: 600;
    text-transform: capitalize;
    max-width: fit-content;
    max-height: fit-content;
`