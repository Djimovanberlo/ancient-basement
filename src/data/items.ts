import { TargetArea, Target } from 'interfaces/game/character-actions'
import { SkillType, ElementName } from 'interfaces/game/elements'
import { Item, ItemCollection, ItemName } from 'interfaces/game/items'

export const FireBallItem: Item = {
  name: ItemName.FIREBALL,
  description: 'A ball of fire',
  element: ElementName.FIRE,
  skillType: SkillType.MAGICAL,
  target: Target.ENEMIES,
  targetArea: TargetArea.MULTIPLE,
  executeItem: ({ usedBy, targets }) => {
    const power = 5

    const newTargets = targets.map(target => ({ ...target, stats: { ...target.stats, health: target.stats.health - power } }))
    console.log('WWW', newTargets)

    return { newUsedBy: usedBy, newTargets }
  },
}

export const IceBallItem: Item = {
  name: ItemName.ICEBALL,
  description: 'A ball of ice',
  element: ElementName.ICE,
  skillType: SkillType.MAGICAL,
  target: Target.ENEMIES,
  targetArea: TargetArea.SINGLE,
  executeItem: ({ usedBy, targets }) => ({ newUsedBy: usedBy, newTargets: targets }),
}

const itemCollection: ItemCollection = {
  [ItemName.FIREBALL]: FireBallItem,
  [ItemName.ICEBALL]: IceBallItem,
}

export default itemCollection
