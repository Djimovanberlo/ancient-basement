export interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
}

export type GeneralModalProps = ModalProps & { children: React.ReactNode; className?: string }
