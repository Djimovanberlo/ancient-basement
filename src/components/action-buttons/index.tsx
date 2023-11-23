import ActionButton from 'components/action-button'
import { ActionName } from 'interfaces/game/character-actions'
import { useId } from 'react'

const ActionButtons = () => {
  const id = useId()
  const actionArr = Object.values(ActionName)

  return (
    <div className='actionButtons'>
      {actionArr.map(actionName => (
        <ActionButton key={id + actionName} actionName={actionName} />
      ))}
    </div>
  )
}

export default ActionButtons
