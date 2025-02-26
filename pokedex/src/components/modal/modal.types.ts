import { IPokemon } from "../../utils/Global.types";

export interface ModalProps {
  isOpen: boolean;
  pokemon: IPokemon;
  onClose: () => void;
}