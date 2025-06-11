import styled from "styled-components";
import { StatusBarProps } from "./statusBar.types";

export const StatusBarContainer = styled.div<StatusBarProps>`
    height: ${(props) => props.size ? props.size : "20px"};
    
`