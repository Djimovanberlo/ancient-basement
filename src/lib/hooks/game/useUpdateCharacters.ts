import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { CharacterActionActors } from 'interfaces/game/character-actions'
import battleState from 'store/battle/atoms'

const useUpdateCharacters = () => {
  const setBattle = useSetRecoilState(battleState)

  const updateCharacters = useCallback(
    ({ usedBy, targets }: CharacterActionActors) => {
      const newCharactersStatus = targets.concat(usedBy)

      setBattle(prevBattle => {
        const newHeroes = [...prevBattle.heroes].map(prevHero => {
          const matchingHero = newCharactersStatus.find(({ id }) => id === prevHero.id) || prevHero
          return matchingHero
        })

        const newEnemies = [...prevBattle.enemies].map(prevEnemy => {
          const matchingEnemy = newCharactersStatus.find(({ id }) => id === prevEnemy.id) || prevEnemy
          return matchingEnemy
        })

        return {
          heroes: newHeroes,
          enemies: newEnemies,
        }
      })
    },
    [setBattle]
  )

  return updateCharacters
}

export default useUpdateCharacters
