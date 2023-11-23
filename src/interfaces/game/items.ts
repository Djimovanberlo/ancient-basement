import { Action } from 'interfaces/game/action'

export enum ItemName {
  ICEBALL = 'iceball',
  FIREBALL = 'fireball',
}

export type ItemCollection = Record<ItemName, Action>
