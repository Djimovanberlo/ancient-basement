import { StatusAndId } from './status'

export enum HeroActionName {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
  ITEM = 'item',
  INVENTORY = 'inventory',
}

export enum EnemyActionName {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
}

export interface CharacterActionActors {
  usedByStatus: StatusAndId
  targetsStatus: StatusAndId[]
}

export interface NewCharacterActionActors {
  newUsedByStatus: StatusAndId
  newTargetsStatus: StatusAndId[]
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
