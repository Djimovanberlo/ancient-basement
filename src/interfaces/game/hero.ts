import { Ailment, Buff, Debuff, Stats } from './status'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from './equipment'
import { CharacterType } from './character'

export enum HeroName {
  IRENE = 'irene',
  CHAD = 'chad',
  OLIVE = 'olive',
  EUGENE = 'eugene',
}

export interface HeroInventory {
  weapon: WeaponName | null
  head: HelmetName | null
  body: ArmorName | null
  accessory1: AccessoryName | null
  accessory2: AccessoryName | null
  accessory3: AccessoryName | null
}

export interface Hero {
  name: HeroName | null
  characterType: CharacterType.HERO
  id: number
  inventory: HeroInventory
  stats: Stats
  buffs: Buff[]
  debuffs: Debuff[]
  ailments: Ailment[]
}
