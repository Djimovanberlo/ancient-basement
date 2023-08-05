import { AbilityName } from './ability'
import { Stats } from './stats'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy {
  name: EnemyName
  id?: string
  abilities: AbilityName[]
  stats: Stats
}
