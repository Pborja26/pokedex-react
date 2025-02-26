import * as styled from "./input.style"
import { InputProps } from "./input.types"

const Input = ({
  value = "",
  setValue,
  type,
  onClick,
  children,
  style
}: InputProps) => {
  return (
    <styled.InputComponent 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      placeholder="Filtrar pokemons..."
      type={type}
      onClick={onClick}
      style={style}
    >
      {children}
    </styled.InputComponent>
  )
}

export default Input;
