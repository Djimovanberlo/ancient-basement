import { CharacterActionActors, TargetAreaType, TargetType } from './character-actions'
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
  target: TargetType
  targetType: TargetAreaType
  executeItem: (characterActionActors: CharacterActionActors) => CharacterActionActors
}

export type ItemCollection = Record<ItemName, Item>
