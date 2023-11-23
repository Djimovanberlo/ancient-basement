import { createCharacter } from 'factory/character'
import { createStats } from 'factory/stats'
import { Character } from 'interfaces/game/character'
import { EnemyName } from 'interfaces/game/enemy'

export const goblin: Character = createCharacter({
  name: EnemyName.GOBLIN,
  id: 'e1',
  abilities: [],
  status: {
    stats: createStats({
      maxHealth: 10,
    }),
    buffs: [],
    debuffs: [],
    ailments: [],
  },
})

const enemyCollection: Record<EnemyName, Character> = {
  [EnemyName.GOBLIN]: goblin,
}

export default enemyCollection
