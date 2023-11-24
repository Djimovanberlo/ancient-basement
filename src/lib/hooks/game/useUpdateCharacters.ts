import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { CharacterActionActors } from 'interfaces/game/character-actions'
import { findCharacterById, getAliveCharacters } from 'lib/game/characters'
import battleState from 'store/battle/atoms'

const useUpdateCharacters = () => {
  const setBattle = useSetRecoilState(battleState)

  const updateCharacters = useCallback(
    ({ usedBy, targets }: CharacterActionActors) => {
      const newCharacters = targets.concat(usedBy)

      setBattle(prevBattle => {
        const newHeroes = getAliveCharacters(
          [...prevBattle.heroes].map(prevHero => {
            return findCharacterById(newCharacters, prevHero?.id) || prevHero
          })
        )

        const newEnemies = getAliveCharacters(
          [...prevBattle.enemies].map(prevEnemy => {
            return findCharacterById(newCharacters, prevEnemy?.id) || prevEnemy
          })
        )

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
