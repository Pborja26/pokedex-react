import Container from "../../container/container";
import Badge from "../../badge/badge";
import Image from "../../image/image";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

const PokeDetailsCard = () => {
    const { selectedPoke, setSelectedPoke } = useContext(GlobalContext);

    return (
        <Container direction="row">
            <Container direction="column">
                {/* <Badge label={selectedPoke?.name} /> */}
            </Container>
        </Container>
    )
};

export default PokeDetailsCard;
