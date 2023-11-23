import Button from 'components/button'
import Modal, { ModalProps } from 'components/modal'
import { H2, P1 } from 'components/typography'

const NewGameModal = ({ toggleModal, isOpen }: ModalProps) => {
  const handleClose = () => isOpen && toggleModal()

  return (
    <Modal className='newGameModal' closeModal={handleClose}>
      <div>
        <H2>Start a new Game</H2>
        <P1>All your previous progress will be lost.</P1>
      </div>
      <div className='newGameModal__buttons'>
        <Button onClick={handleClose}>Return</Button>
        <Button onClick={() => console.log('START NEW GAME')}>New Game</Button>
      </div>
    </Modal>
  )
}

export default NewGameModal
