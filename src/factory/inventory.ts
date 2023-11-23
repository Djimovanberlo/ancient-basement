import { Inventory } from 'interfaces/game/character'

export const createInventory = (partialInventory: Partial<Inventory>): Inventory => ({
  weapon: null,
  head: null,
  body: null,
  accessory1: null,
  accessory2: null,
  accessory3: null,
  ...partialInventory,
})
