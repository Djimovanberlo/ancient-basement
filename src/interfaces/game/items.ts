import { CharacterActionActors, Target, TargetType } from './character-actions'

export enum ItemName {
  ICEBALL = 'iceball',
  FIREBALL = 'fireball',
}

export interface Item {
  name: ItemName
  target: Target
  targetType: TargetType
  executeItem: (characterActionActors: CharacterActionActors) => CharacterActionActors
}

export type ItemCollection = Record<ItemName, Item>
