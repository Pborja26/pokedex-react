import { DragNDropContainer } from "./dragAndDrop.style";
import { useState, useRef } from "react";

const DragAndDropModal = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const dragging = useRef(false);
    const offset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        dragging.current = true;
        offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragging.current) {
        setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
        }
    };

    const handleMouseUp = () => {
        dragging.current = false;
    };

    return (
        <DragNDropContainer
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >

        </DragNDropContainer>
    )
};

export default DragAndDropModal;
