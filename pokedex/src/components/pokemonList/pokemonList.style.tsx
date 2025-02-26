import styled from "styled-components";

export const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
    height: 70vh;
    width: 88vw;
    background-color: #fff;
    overflow: auto;
    padding: 1rem;
    border-radius: 8px;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    } 

    @media (max-width: 810px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 530px) {
        grid-template-columns: 1fr;
    }
`