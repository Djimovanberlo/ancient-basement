import { CharacterActionActors } from './character-actions'

export enum ItemName {
  ICEBALL = 'iceball',
  POTION = 'potion',
  FIREBALL = 'fireball',
}

export interface Item {
  name: ItemName
  executeItem: (characterActionActors: CharacterActionActors) => CharacterActionActors
}

export type ItemCollection = Record<ItemName, Item>
