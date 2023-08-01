import { EnemyName } from './enemy'
import { HeroName } from './hero'

export interface Round {
  turnOrder: (HeroName | EnemyName)[]
  turnIndex: number
}
