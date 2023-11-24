import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { goblin } from 'data/enemies'
import { createNewRound } from 'lib/game/round'
import battleState from 'store/battle/atoms'
import roundState from 'store/round/atoms'

const useCreateNewBattle = () => {
  const setRound = useSetRecoilState(roundState)
  const [{ heroes, enemies }, setBattle] = useRecoilState(battleState)

  useEffect(() => {
    if (enemies.length === 0) {
      const newEnemies = [goblin] // TODO replace this with a random enemy generator

      setBattle(prevState => ({
        ...prevState,
        enemies: newEnemies,
      }))

      const allCharacters = [...heroes, ...newEnemies]
      const newTurnOrder = createNewRound(allCharacters)

      setRound(prevState => ({
        ...prevState,
        turnOrder: newTurnOrder,
      }))
    }
  }, [enemies, heroes, setRound, setBattle])
}

export default useCreateNewBattle
