import { atom } from 'recoil'

import { GlobalInventory } from 'interfaces/game/global-inventory'

export const GLOBAL_INVENTORY_KEY = 'globalInventory'

export const initialGlobalInventory: GlobalInventory = {
  weapons: [],
  helmet: [],
  armor: [],
  accessories: [],
  abilities: [],
  items: [],
}

export const globalInventoryState = atom<GlobalInventory>({
  key: GLOBAL_INVENTORY_KEY,
  default: initialGlobalInventory,
})
