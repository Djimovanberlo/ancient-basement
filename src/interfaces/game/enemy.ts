import { AbilityName } from './ability'
import { Stats } from './stats'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy {
  name: EnemyName
  abilities: AbilityName[]
  stats: Stats
}
