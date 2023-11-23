import { Character } from 'interfaces/game/character'

export enum ActionName {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
  ITEM = 'item',
  INVENTORY = 'inventory',
}

export interface CharacterActionActors {
  usedBy: Character
  targets: Character[]
}

export enum Target {
  SELF = 'self',
  OPPONENTS = 'opponents',
  ALLIES = 'allies',
}

export enum TargetArea {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
}
