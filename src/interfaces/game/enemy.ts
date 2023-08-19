import { AbilityName } from './ability'
import { Ailment, Buff, Debuff, Stats, Status } from './status'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy {
  name: EnemyName
  id: string
  abilities: AbilityName[]
  status: Status
}
