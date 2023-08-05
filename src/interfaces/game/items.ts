import { CharacterActionActors, TargetArea, Target, NewCharacterActionActors } from './character-actions'
import { SkillType, ElementName } from './elements'

export enum ItemName {
  ICEBALL = 'iceball',
  FIREBALL = 'fireball',
}

export interface Item {
  name: ItemName
  description: string
  element: ElementName
  skillType: SkillType
  target: Target
  targetArea: TargetArea
  executeItem: (characterActionActors: CharacterActionActors) => NewCharacterActionActors
}

export type ItemCollection = Record<ItemName, Item>
