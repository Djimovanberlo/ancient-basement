import Modal from '.'

import { ModalProps } from '../../interfaces/components/modal'
import { H1, H2, P1, P2 } from '../typography'

const NewGameModal = ({ toggleModal, isOpen }: ModalProps) => {
  return (
    <Modal toggleModal={toggleModal} isOpen={isOpen}>
      <H1>H1</H1>
      <H2>H2</H2>
      <P1>P1</P1>
      <P2>P2</P2>
    </Modal>
  )
}

export default NewGameModal
