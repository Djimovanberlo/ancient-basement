import { GeneralModalProps } from '../../interfaces/components/modal'
import useClickOutside from '../../lib/hooks/useClickOutside'

const Modal = ({ children, className = '', isOpen, toggleModal }: GeneralModalProps) => {
  const handleClose = () => isOpen && toggleModal()
  const { ref } = useClickOutside(handleClose)

  return (
    <div ref={ref} className={`modal ${className}`}>
      {children}
    </div>
  )
}

export default Modal
