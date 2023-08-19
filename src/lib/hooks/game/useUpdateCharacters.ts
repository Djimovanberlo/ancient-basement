import { NewCharacterActionActors } from 'interfaces/game/character-actions'
import { useSetRecoilState } from 'recoil'
import { charactersState } from 'store/characters/atoms'

const useUpdateCharacters = () => {
  const setCharacters = useSetRecoilState(charactersState)

  const updateCharacters = ({ newUsedByStatus, newTargetsStatus }: NewCharacterActionActors) => {
    const newCharactersStatus = newTargetsStatus.concat(newUsedByStatus)

    setCharacters(prevCharacters => {
      const newHeroes = [...prevCharacters.heroes].map(prevHero => {
        const matchingHero = newCharactersStatus.find(({ id }) => id === prevHero.id)
        if (matchingHero) return { ...prevHero, status: matchingHero.status }
        return prevHero
      })

      const newEnemies = [...prevCharacters.enemies].map(prevEnemy => {
        const matchingEnemy = newCharactersStatus.find(({ id }) => id === prevEnemy.id)
        if (matchingEnemy) return { ...prevEnemy, status: matchingEnemy.status }
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
