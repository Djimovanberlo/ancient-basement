import { AbilityName } from './ability'
import { HeroActionName } from './character-actions'
import { EnemyName } from './enemy'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from './equipment'
import { HeroName } from './hero'
import { ItemName } from './items'

export interface Turn {
  action: HeroActionName | null
  targeting: boolean
  selection: ItemName | AbilityName | WeaponName | ArmorName | HelmetName | AccessoryName | null
  targets: (HeroName | EnemyName)[]
}
