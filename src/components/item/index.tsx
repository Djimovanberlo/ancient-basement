import itemCollection from 'data/items'
import { ItemName } from 'interfaces/game/items'

const Item = () => {
  // temp
  const { name, description, element, skillType, target, targetType } = itemCollection[ItemName.FIREBALL]

  return <div>{name}</div>
}

export default Item
