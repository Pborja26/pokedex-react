import { Input } from "../compIndex";
import { useState } from "react";
import * as styled from "./headder.style";

interface HeadderProps {
    children: React.ReactNode;
}

const Headder = ({
    children
}: HeadderProps) => {
    return (
        <styled.Container>
            <styled.UpperContainer>
                <Input value={""} setValue={(e) => console.log(e)} />
            </styled.UpperContainer>
            {children}
            <styled.LowerContainer>
                
            </styled.LowerContainer>
        </styled.Container>
    )
}

export default Headder;
