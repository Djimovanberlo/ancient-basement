import { createInitStats } from 'factory/stats'
import { CharacterType } from 'interfaces/game/character'
import { Enemy, EnemyName } from 'interfaces/game/enemy'

// TODO make factory
export const goblin: Enemy = {
  name: EnemyName.GOBLIN,
  characterType: CharacterType.ENEMY,
  id: 1,
  stats: createInitStats({
    maxHealth: 10,
  }),
  buffs: [],
  debuffs: [],
  ailments: [],
  abilities: [],
}
