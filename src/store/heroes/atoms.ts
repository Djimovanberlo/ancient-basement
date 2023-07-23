import { atom } from 'recoil'

import { Hero, HeroName } from 'interfaces/game/hero'
import { initialChad, initialIrene } from './initial'

export const ireneState = atom<Hero>({
  key: HeroName.IRENE,
  default: initialIrene,
})

export const chadState = atom<Hero>({
  key: HeroName.CHAD,
  default: initialChad,
})

export const oliveState = atom<Hero>({
  key: HeroName.OLIVE,
  default: initialIrene,
})

export const eugeneState = atom<Hero>({
  key: HeroName.EUGENE,
  default: initialIrene,
})
