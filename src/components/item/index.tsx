import { useResetRecoilState, useSetRecoilState } from 'recoil'

import { Target } from 'interfaces/game/character-actions'
import { ItemName } from 'interfaces/game/items'
import itemCollection from 'data/items'
import { turnState } from 'store/turn/atoms'

const Item = () => {
  // temp
  const setTurnState = useSetRecoilState(turnState)
  const resetTurnState = useResetRecoilState(turnState)
  const item = itemCollection[ItemName.FIREBALL]

  const handleItem = () => {
    if (item.target !== Target.SELF) return setTurnState(prevState => ({ ...prevState, targeting: true, selection: item }))
    return resetTurnState()
  }

  return <div onClick={handleItem}>{item.name}</div>
}

export default Item
