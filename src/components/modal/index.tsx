import { ReactNode } from 'react'
import useClickOutside from 'lib/hooks/utils/useClickOutside'

// TODO make into <dialog> element

export interface ModalProps {
  isOpen: boolean
  toggleModal: () => void
}

export interface GeneralModalProps {
  children: ReactNode
  className?: string
  closeModal: () => void
}

const Modal = ({ children, className = '', closeModal }: GeneralModalProps) => {
  const { ref } = useClickOutside(closeModal)

  return (
    <div ref={ref} className={`modal ${className}`}>
      {children}
    </div>
  )
}

export default Modal
