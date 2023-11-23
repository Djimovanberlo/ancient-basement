import { AbilityName } from 'interfaces/game/ability'
import { EnemyName } from 'interfaces/game/enemy'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from 'interfaces/game/equipment'
import { HeroName } from 'interfaces/game/hero'
import { Status } from 'interfaces/game/status'

export interface Inventory {
  weapon: WeaponName | null
  head: HelmetName | null
  body: ArmorName | null
  accessory1: AccessoryName | null
  accessory2: AccessoryName | null
  accessory3: AccessoryName | null
}

export interface Character {
  name: HeroName | EnemyName | null
  id: string | null
  abilities: AbilityName[]
  inventory: Inventory
  status: Status
}
