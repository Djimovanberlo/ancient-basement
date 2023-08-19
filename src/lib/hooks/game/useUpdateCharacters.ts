import { CharacterType, Characters } from 'interfaces/game/character'
import { NewCharacterActionActors } from 'interfaces/game/character-actions'
import { Enemy } from 'interfaces/game/enemy'
import { Hero } from 'interfaces/game/hero'
import { useSetRecoilState } from 'recoil'
import { charactersState } from 'store/characters/atoms'

const useUpdateCharacters = () => {
  const setCharacters = useSetRecoilState(charactersState)

  const updateCharacters = ({ newUsedBy, newTargets }: NewCharacterActionActors) => {
    const newCharacters = newTargets.concat(newUsedBy)

    setCharacters(prevCharacters => {
      const newHeroes = [...prevCharacters.heroes].map(prevHero => {
        const matchingHero = newCharacters.filter(({ characterType }) => characterType === CharacterType.HERO).find(({ id }) => id === prevHero.id)
        if (matchingHero) return matchingHero
        return prevHero
      })

      const newEnemies = [...prevCharacters.enemies].map(prevEnemy => {
        const matchingEnemy = newCharacters.filter(({ characterType }) => characterType === CharacterType.ENEMY).find(({ id }) => id === prevEnemy.id)
        if (matchingEnemy) return matchingEnemy
        return prevEnemy
      })

      return {
        heroes: newHeroes,
        enemies: newEnemies,
      }
    })
  }

  return updateCharacters
}

export default useUpdateCharacters
