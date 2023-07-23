import { atom } from 'recoil'

import { GlobalInventory } from 'interfaces/game/global-inventory'
import { initialGlobalInventory } from './initial'

export const GLOBAL_INVENTORY_KEY = 'globalInventory'

export const globalInventoryState = atom<GlobalInventory>({
  key: GLOBAL_INVENTORY_KEY,
  default: initialGlobalInventory,
})
