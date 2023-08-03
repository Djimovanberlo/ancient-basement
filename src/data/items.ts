import { Target, TargetType } from 'interfaces/game/character-actions'
import { Item, ItemCollection, ItemName } from 'interfaces/game/items'

export const FireBallItem: Item = {
  name: ItemName.FIREBALL,
  target: Target.ENEMIES,
  targetType: TargetType.MULTIPLE,
  executeItem: ({ usedBy, targets }) => ({ usedBy, targets }),
}

export const IceBallItem: Item = {
  name: ItemName.ICEBALL,
  target: Target.ENEMIES,
  targetType: TargetType.SINGLE,
  executeItem: ({ usedBy, targets }) => ({ usedBy, targets }),
}

const itemCollection: ItemCollection = {
  [ItemName.FIREBALL]: FireBallItem,
  [ItemName.ICEBALL]: IceBallItem,
}

export default itemCollection
