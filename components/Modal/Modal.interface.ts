import { ReactNode } from "react";

export interface ModalProps {
  isVisible: boolean,
  children: ReactNode,
  onClose: ()=> void
}