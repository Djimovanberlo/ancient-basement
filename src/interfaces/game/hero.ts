import { Stats } from './stats'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from './equipment'

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
  name: HeroName
  id?: string
  inventory: HeroInventory
  stats: Stats
}
