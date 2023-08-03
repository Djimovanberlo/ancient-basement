import { HeroActionNames } from './character-actions'
import { EnemyName } from './enemy'
import { HeroName } from './hero'

// export type Turn = Record<HeroActionNames, { isSelected: boolean }>

export interface Turn {
  heroActions: Record<HeroActionNames, { isSelected: boolean }>
  targets: (HeroName | EnemyName)[]
}
