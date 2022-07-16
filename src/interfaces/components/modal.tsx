export interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
}

export interface GeneralModalProps {
  children: React.ReactNode
  className?: string
  closeModal: () => void
}
