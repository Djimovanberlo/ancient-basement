import { ReactNode } from 'react'

export interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
}

export interface GeneralModalProps {
  children: ReactNode
  className?: string
  closeModal: () => void
}
