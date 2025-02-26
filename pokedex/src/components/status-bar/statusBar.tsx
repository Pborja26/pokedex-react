import * as styled from "./statusBar.style";
import { StatusBarProps } from "./statusBar.types";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../utils/GlobalContext";

const StatusBar = ({
  title,
  value = 0,
  color = "water"
}: StatusBarProps) => {
  const { HandleColor } = useContext(GlobalContext);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (counter < value) {
      const timer = setTimeout(() => {
        setCounter(counter + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (counter > value) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [counter, value]);

  return (
    <styled.Container>
      <styled.Label>
        {title}:
      </styled.Label>
      <styled.Label color={HandleColor(color, "main")}>
        {counter}
      </styled.Label>
      <styled.BarContainer value={value} color={HandleColor(color, "main")}>
        <styled.Bar color={HandleColor(color, "main")} value={value}/>
      </styled.BarContainer>
    </styled.Container>
  )
}

export default StatusBar;
