import { Character } from 'interfaces/game/character'
import { createInventory } from 'factory/inventory'
import { createStats } from 'factory/stats'

export const createCharacter = (partialCharacter: Partial<Character>): Character => ({
  id: null,
  name: null,
  status: {
    stats: createStats({}),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
  abilities: [],
  inventory: createInventory({}),
  ...partialCharacter,
})
