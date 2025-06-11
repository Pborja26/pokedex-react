import styled from "styled-components";
import { ImageProps } from "./image.types";

export const ImageComponent = styled.img<ImageProps>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    src: ${(props) => props.src};
`