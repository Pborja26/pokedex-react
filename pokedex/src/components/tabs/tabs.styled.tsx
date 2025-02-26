import styled from "styled-components";
import { TabsProps } from "./tabs.types";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 2px solid gray;
`

export const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: gray;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 100px;
  height: 100%;
`
