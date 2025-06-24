import styled from "styled-components";
import { TabsStyleProps } from "./tabs.types";

export const TabsContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`

export const TabComponent = styled.div<TabsStyleProps>`
   color: ${(props) => props.active ? "#0d01bb": "#6c6c6c"};
   border-bottom: ${(props) => props.active ? "6px solid #0d01bb" : "3px solid #6c6c6c"};
   background-color: ${(props) => props.active ? "#fff" : "#bcbcbc" };
   box-shadow: ${(props) => props.active ? "0px -5px 4px 0px rgba(0,0,0,0.3)" : ""};
   z-index: ${(props) => props.active ? "2" : "1"};
   min-width: 100px;
   display: flex;
   align-items: center;
   justify-content: center;
`