// import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { keyframes } from '@emotion/react';
import { useState, useRef } from 'react';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {
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
    <div className="App">
      {/* <CatchingPokemonIcon sx={{
        animation: `${spin} 1s linear infinite`,
        fontSize: 40, 
      }}/> */}
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'coral',
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: 'grabbing',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >

      </div>
    </div>
  );
}

export default App;
