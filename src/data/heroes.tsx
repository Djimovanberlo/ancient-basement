import { createCharacter } from 'factory/character'
import { createInventory } from 'factory/inventory'
import { createStats } from 'factory/stats'
import { Character } from 'interfaces/game/character'
import { WeaponName } from 'interfaces/game/equipment'
import { HeroName } from 'interfaces/game/hero'

export const irene: Character = createCharacter({
  name: HeroName.IRENE,
  id: 'h1',
  inventory: createInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
})

export const chad: Character = createCharacter({
  name: HeroName.CHAD,
  id: 'h2',
  inventory: createInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
})

export const olive: Character = createCharacter({
  name: HeroName.OLIVE,
  id: 'h3',
  inventory: createInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
})

export const eugene: Character = createCharacter({
  name: HeroName.EUGENE,
  id: 'h4',
  inventory: createInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
})

const heroCollection: Record<HeroName, Character> = {
  [HeroName.IRENE]: irene,
  [HeroName.CHAD]: chad,
  [HeroName.OLIVE]: olive,
  [HeroName.EUGENE]: eugene,
}

export default heroCollection
