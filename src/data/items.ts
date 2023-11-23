import { createAction } from 'factory/action'
import { Target, TargetArea } from 'interfaces/game/character-actions'
import { ElementName, SkillType } from 'interfaces/game/elements'
import { fireballEffect } from 'data/effects'
import { ItemName } from 'interfaces/game/items'
import { Action } from 'interfaces/game/action'

export const fireballItem = createAction({
  name: 'Fireball',
  description: 'A ball of fire',
  element: ElementName.FIRE,
  skillType: SkillType.MAGICAL,
  target: Target.OPPONENTS,
  targetArea: TargetArea.SINGLE,
  executeAction: fireballEffect,
})

const itemCollection: Record<ItemName, Action> = {
  [ItemName.FIREBALL]: fireballItem,
  [ItemName.ICEBALL]: fireballItem,
}

export default itemCollection
