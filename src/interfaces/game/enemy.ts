import { AbilityName } from './ability'
import { Status } from './status'

export enum EnemyName {
  GOBLIN = 'goblin',
}

export interface Enemy {
  name: EnemyName
  id: string
  abilities: AbilityName[]
  status: Status
}
