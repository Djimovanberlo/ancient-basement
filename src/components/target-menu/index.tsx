import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'

import useUpdateCharacters from 'lib/hooks/game/useUpdateCharacters'
import battleState from 'store/battle/atoms'
import roundState from 'store/round/atoms'
import turnState from 'store/turn/atoms'
import selectActiveTurn from 'store/round/selectors'

const TargetMenu = () => {
  const updateCharacters = useUpdateCharacters()
  const setRound = useSetRecoilState(roundState)
  const usedBy = useRecoilValue(selectActiveTurn)
  const targets = useRecoilValue(battleState).enemies // !TEMP
  const resetTurn = useResetRecoilState(turnState)
  const { selection } = useRecoilValue(turnState)

  const handleSelectTarget = () => {
    if (!selection || !selection.executeAction) return

    const result = selection.executeAction({ usedBy, targets })

    updateCharacters({
      usedBy: result.usedBy,
      targets: result.targets,
    })

    setRound(prevRound => ({
      ...prevRound,
      turnOrder: prevRound.turnOrder.slice(1),
    }))

    resetTurn()
  }

  return (
    <div onClick={handleSelectTarget} className='targetMenu'>
      Targeting
    </div>
  )
}

export default TargetMenu
