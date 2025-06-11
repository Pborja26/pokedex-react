import styled from "styled-components";
import { ContainerProps } from "./container.types";

export const ContainerComponent = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    padding: ${(props) => props.padding};
    gap: ${(props) => props.gap};
    align-items: ${(props) => props.align_items};
    justify-content: ${(props) => props.justify_content};
    background-color: ${(props) => props.background_color};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.radius};
    cursor: ${(props) => props.cursor};

    &:active {
        transform: ${(props) => props.click ? "translate(1px, 1px)" : ""};
    }
`