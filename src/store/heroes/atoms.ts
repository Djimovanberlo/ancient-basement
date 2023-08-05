export {}
// import { atom, atomFamily, selectorFamily } from 'recoil'

// import { Hero, HeroName } from 'interfaces/game/hero'
// import { initialChad, initialEugene, initialIrene, initialOlive } from './initial'

// const ALL_HEROES_KEY = 'allHeroes'

// export const allHeroesState = atomFamily<Hero, HeroName>({
//   key: ALL_HEROES_KEY,
//   default: selectorFamily({
//     key: ALL_HEROES_KEY,
//     get:
//       heroName =>
//       ({ get }) => {
//         const heroesObj = {
//           [HeroName.IRENE]: get(ireneState),
//           [HeroName.CHAD]: get(chadState),
//           [HeroName.OLIVE]: get(oliveState),
//           [HeroName.EUGENE]: get(eugeneState),
//         }

//         return heroesObj[heroName]
//       },
//   }),
// })

// export const ireneState = atom<Hero>({
//   key: HeroName.IRENE,
//   default: initialIrene,
// })

// export const chadState = atom<Hero>({
//   key: HeroName.CHAD,
//   default: initialChad,
// })

// export const oliveState = atom<Hero>({
//   key: HeroName.OLIVE,
//   default: initialOlive,
// })

// export const eugeneState = atom<Hero>({
//   key: HeroName.EUGENE,
//   default: initialEugene,
// })
