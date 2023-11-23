import { AbilityName } from 'interfaces/game/ability'
import { AccessoryName, ArmorName, HelmetName, WeaponName } from 'interfaces/game/equipment'
import { ItemName } from 'interfaces/game/items'

export interface GlobalInventory {
  weapons: WeaponName[]
  helmet: HelmetName[]
  armor: ArmorName[]
  accessories: AccessoryName[]
  abilities: AbilityName[]
  items: ItemName[]
}
