import { HeroActionName } from 'interfaces/game/character-actions'

interface Props {
  actionName: HeroActionName
}

const ActionButton = ({ actionName }: Props) => {
  const letters = actionName.slice(0, 2)
  return <div className='actionButton'>{letters}</div>
}

export default ActionButton
