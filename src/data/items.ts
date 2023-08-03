import { TargetAreaType, TargetType } from 'interfaces/game/character-actions'
import { SkillType, ElementName } from 'interfaces/game/elements'
import { Item, ItemCollection, ItemName } from 'interfaces/game/items'

export const FireBallItem: Item = {
  name: ItemName.FIREBALL,
  description: 'A ball of fire',
  element: ElementName.FIRE,
  skillType: SkillType.MAGICAL,
  target: TargetType.ENEMIES,
  targetType: TargetAreaType.MULTIPLE,
  executeItem: ({ usedBy, targets }) => ({ usedBy, targets }),
}

export const IceBallItem: Item = {
  name: ItemName.ICEBALL,
  description: 'A ball of ice',
  element: ElementName.ICE,
  skillType: SkillType.MAGICAL,
  target: TargetType.ENEMIES,
  targetType: TargetAreaType.SINGLE,
  executeItem: ({ usedBy, targets }) => ({ usedBy, targets }),
}

const itemCollection: ItemCollection = {
  [ItemName.FIREBALL]: FireBallItem,
  [ItemName.ICEBALL]: IceBallItem,
}

export default itemCollection
