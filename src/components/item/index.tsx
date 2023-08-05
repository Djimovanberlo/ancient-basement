import { useResetRecoilState, useSetRecoilState } from 'recoil'

import { Target } from 'interfaces/game/character-actions'
import { ItemName } from 'interfaces/game/items'
import itemCollection from 'data/items'
import { turnState } from 'store/turn/atoms'

const Item = () => {
  // temp
  const setTurnState = useSetRecoilState(turnState)
  const resetTurnState = useResetRecoilState(turnState)
  const { name, description, element, skillType, target, targetArea } = itemCollection[ItemName.FIREBALL]

  const handleItem = () => {
    if (target !== Target.SELF) setTurnState(prevState => ({ ...prevState, targeting: true, selection: name }))
    else {
      // execute Item
      resetTurnState()
    }
  }

  return <div onClick={handleItem}>{name}</div>
}

export default Item
