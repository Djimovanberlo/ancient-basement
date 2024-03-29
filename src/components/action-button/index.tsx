import { useSetRecoilState } from 'recoil'

import { ActionName } from 'interfaces/game/character-actions'
import turnState from 'store/turn/atoms'

interface Props {
  actionName: ActionName
}

const ActionButton = ({ actionName }: Props) => {
  const letters = actionName.slice(0, 2)

  const setTurnState = useSetRecoilState(turnState)

  const handleClick = () => setTurnState(prevState => ({ ...prevState, action: actionName }))

  return (
    <div onClick={handleClick} className='actionButton'>
      {letters}
    </div>
  )
}

export default ActionButton
