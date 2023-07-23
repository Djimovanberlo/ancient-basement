import { AbilityNames } from './ability'
import { Character } from './character'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy extends Character {
  abilities: AbilityNames[]
}
