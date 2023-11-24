import { createNewRound } from 'lib/game/round'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import battleState from 'store/battle/atoms'
import roundState from 'store/round/atoms'

const useCreateNewRound = () => {
  const { heroes, enemies } = useRecoilValue(battleState)
  const [round, setRound] = useRecoilState(roundState)

  useEffect(() => {
    if (round.turnOrder.length === 0) {
      const allCharacters = [...heroes, ...enemies]
      const newTurnOrder = createNewRound(allCharacters)

      setRound(prevState => ({
        ...prevState,
        turnOrder: newTurnOrder,
      }))
    }
  }, [heroes, enemies, setRound, round])
}
export default useCreateNewRound
