import Modal from '.'

import { ModalProps } from '../../interfaces/components/modal'

const RulesModal = ({ toggleModal, isOpen }: ModalProps) => {
  return (
    <Modal toggleModal={toggleModal} isOpen={isOpen}>
      rules
    </Modal>
  )
}

export default RulesModal
