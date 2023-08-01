import { HeroActionNames } from './character-actions'

export type Turn = Record<HeroActionNames, { isSelected: false }>
