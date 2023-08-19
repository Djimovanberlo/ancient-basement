import { createInitHeroInventory } from 'factory/inventory'
import { createInitStats } from 'factory/stats'
import { WeaponName } from 'interfaces/game/equipment'
import { Hero, HeroName } from 'interfaces/game/hero'

// TODO factory
export const initialIrene: Hero = {
  name: HeroName.IRENE,
  id: 'h1',
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
}

export const initialChad: Hero = {
  name: HeroName.CHAD,
  id: 'h2',
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
}

export const initialOlive: Hero = {
  name: HeroName.OLIVE,
  id: 'h3',
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
}

export const initialEugene: Hero = {
  name: HeroName.EUGENE,
  id: 'h4',
  inventory: createInitHeroInventory({ weapon: WeaponName.SHORT_SWORD }),
  status: {
    stats: createInitStats({ maxHealth: 100, maxMana: 100 }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
}
