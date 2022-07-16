import Modal from '.'

import { ModalProps } from '../../interfaces/components/modal'

const NewGameModal = ({ toggleModal, isOpen }: ModalProps) => {
  return (
    <Modal toggleModal={toggleModal} isOpen={isOpen}>
      new game
    </Modal>
  )
}

export default NewGameModal
