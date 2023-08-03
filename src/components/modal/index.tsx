import { GeneralModalProps } from 'interfaces/components/modal'
import useClickOutside from 'lib/hooks/utils/useClickOutside'

const Modal = ({ children, className = '', closeModal }: GeneralModalProps) => {
  const { ref } = useClickOutside(closeModal)

  return (
    <div ref={ref} className={`modal ${className}`}>
      {children}
    </div>
  )
}

export default Modal
