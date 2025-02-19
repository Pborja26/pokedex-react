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

            </styled.UpperContainer>
            {children}
            <styled.LowerContainer>
                
            </styled.LowerContainer>
        </styled.Container>
    )
}

export default Headder;
