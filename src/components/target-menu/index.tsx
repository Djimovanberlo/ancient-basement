import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'

import useUpdateCharacters from 'lib/hooks/game/useUpdateCharacters'
import battleState from 'store/battle/atoms'
import roundState from 'store/round/atoms'
import turnState from 'store/turn/atoms'

const TargetMenu = () => {
  const updateCharacters = useUpdateCharacters()
  const [round, setRound] = useRecoilState(roundState)
  const targets = useRecoilValue(battleState).enemies // !TEMP
  const resetTurn = useResetRecoilState(turnState)
  const { selection } = useRecoilValue(turnState)

  const handleSelectTarget = () => {
    if (!selection || !selection.executeAction) return
    const usedBy = round.turnOrder[0]
    const result = selection.executeAction({ usedBy, targets })
    updateCharacters({ usedBy: result.usedBy, targets: result.targets })
    setRound({ turnOrder: round.turnOrder.slice(1) })
    resetTurn()
  }

  return (
    <div onClick={handleSelectTarget} className='targetMenu'>
      Targeting
    </div>
  )
}

export default TargetMenu
