import styled from "styled-components";
import { TabsStyleProps } from "./tabs.types";

export const TabsContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const TabComponent = styled.div<TabsStyleProps>`
   color: ${(props) => props.active ? "#6c6c6c" : "#0d01bb"};
   border-bottom: ${(props) => props.active ? "3px solid #6c6c6c" : "6px solid #0d01bb"};
   background-color: ${(props) => props.active ? "#bcbcbc" : "#fff"};
   box-shadow: ${(props) => props.active ? "0px -10px 4px 0px rgba(0,0,0,0.3)" : ""};
   z-index: ${(props) => props.active ? "2" : "1"};
`