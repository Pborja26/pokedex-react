import styled from "styled-components";
import { StatusBarProps } from "./statusBar.types";

export const Container = styled.div`
  width: fit-content;
  height: 50px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const BarContainer = styled.div<StatusBarProps>`
  background-color: ${props => props.color};
  width: 90%;
  height: 10px;
  border-radius: 1rem;
`

export const Bar = styled.div<StatusBarProps>`
  background-color: ${props => props.color};
  width: ${props => props.value}%;
  height: 10px;
  border-radius: 1rem;
  transition: width 5s ease-in-out;
  filter: brightness(130%);
`

export const Label = styled.span<StatusBarProps>`
  color: ${props => props.color ? props.color : "#000"};
  font-size: 20px;
`