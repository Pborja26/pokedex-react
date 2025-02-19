import * as styled from "./input.style"
import { InputProps } from "./input.types"

const Input = ({
  value = "",
  setValue
}: InputProps) => {
  return (
    <styled.InputComponent 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
      placeholder="Filtrar pokemons..."
    />
  )
}

export default Input;
