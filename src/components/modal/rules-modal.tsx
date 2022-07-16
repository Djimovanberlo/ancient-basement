import Modal from '.'

import { ModalProps } from '../../interfaces/components/modal'
import Button from '../button'
import { H2, P1 } from '../typography'

const RulesModal = ({ toggleModal, isOpen }: ModalProps) => {
  const handleClose = () => isOpen && toggleModal()

  return (
    <Modal className='rulesModal' closeModal={handleClose}>
      <div className='rulesModal__text'>
        <H2>The Acient Basement</H2>
        <P1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</P1>
        <P1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </P1>
      </div>
      <Button onClick={handleClose}>Return</Button>
    </Modal>
  )
}

export default RulesModal
