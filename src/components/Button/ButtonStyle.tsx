import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";

export const ButtonComponent = styled.div<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  
`