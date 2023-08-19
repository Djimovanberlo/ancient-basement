import { AbilityName } from './ability'
import { CharacterType } from './character'
import { Ailment, Buff, Debuff, Stats } from './status'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy {
  name: EnemyName
  characterType: CharacterType.ENEMY
  id: number
  abilities: AbilityName[]
  stats: Stats
  buffs: Buff[]
  debuffs: Debuff[]
  ailments: Ailment[]
}
