import { AbilityName } from './ability'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from './equipment'
import { ItemName } from './items'

export interface GlobalInventory {
  weapons: WeaponName[]
  helmet: HelmetName[]
  armor: ArmorName[]
  accessories: AccessoryName[]
  abilities: AbilityName[]
  items: ItemName[]
}
