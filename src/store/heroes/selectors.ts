import { selectorFamily } from 'recoil'

import { HeroInventory, HeroName } from 'interfaces/game/hero'
// import { allHeroesState } from './atoms'
// import { Stats } from 'interfaces/game/stats'

const SELECT_HERO_STATS_KEY = 'selectHeroStats'

const SELECT_HERO_EQUIPMENT_KEY = 'selectHeroEquipment'

// export const selectHeroStats = selectorFamily<Stats, HeroName>({
//   key: SELECT_HERO_STATS_KEY,
//   get:
//     heroName =>
//     ({ get }) => {
//       const { stats } = get(allHeroesState(heroName))
//       return stats
//     },
// })

// export const selectHeroEquipment = selectorFamily<HeroInventory, HeroName>({
//   key: SELECT_HERO_EQUIPMENT_KEY,
//   get:
//     heroName =>
//     ({ get }) => {
//       const { inventory } = get(allHeroesState(heroName))
//       return inventory
//     },
// })
