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

      // TODO replace this with speed calculation to determine turn order
      for (let i = allCharacters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[allCharacters[i], allCharacters[j]] = [allCharacters[j], allCharacters[i]]
      }

      setRound({
        turnOrder: allCharacters,
      })
    }
  }, [heroes, enemies, setRound, round.turnOrder.length])
}
export default useCreateNewRound
