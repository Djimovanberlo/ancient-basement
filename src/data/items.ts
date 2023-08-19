import { TargetArea, Target } from 'interfaces/game/character-actions'
import { SkillType, ElementName } from 'interfaces/game/elements'
import { Item, ItemCollection, ItemName } from 'interfaces/game/items'

export const FireBallItem: Item = {
  name: ItemName.FIREBALL,
  description: 'A ball of fire',
  element: ElementName.FIRE,
  skillType: SkillType.MAGICAL,
  target: Target.OPPONENTS,
  targetArea: TargetArea.MULTIPLE,
  executeItem: ({ usedByStatus, targetsStatus }) => {
    const power = 5

    const newTargetsStatus = targetsStatus.map(target => ({
      ...target,
      status: {
        ...target.status,
        stats: {
          ...target.status.stats,
          health: target.status.stats.health - power,
        },
      },
    }))

    return { newUsedByStatus: { ...usedByStatus }, newTargetsStatus }
  },
}

export const IceBallItem: Item = {
  name: ItemName.ICEBALL,
  description: 'A ball of ice',
  element: ElementName.ICE,
  skillType: SkillType.MAGICAL,
  target: Target.OPPONENTS,
  targetArea: TargetArea.SINGLE,
  executeItem: ({ usedByStatus, targetsStatus }) => ({ newUsedByStatus: usedByStatus, newTargetsStatus: targetsStatus }),
}

const itemCollection: ItemCollection = {
  [ItemName.FIREBALL]: FireBallItem,
  [ItemName.ICEBALL]: IceBallItem,
}

export default itemCollection
