import { Status } from './status'
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
  name: HeroName | null
  id: string
  inventory: HeroInventory
  status: Status
}
