import { Enemy } from './enemy'
import { Hero } from './hero'

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
  usedBy: Hero | Enemy
  targets: (Hero | Enemy)[]
}

export interface NewCharacterActionActors {
  newUsedBy: Hero | Enemy
  newTargets: (Hero | Enemy)[]
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
