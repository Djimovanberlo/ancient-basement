import useUpdateCharacters from 'lib/hooks/game/useUpdateCharacters'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { charactersState } from 'store/characters/atoms'
import { roundState } from 'store/round/atoms'

import { turnState } from 'store/turn/atoms'

const TargetMenu = () => {
  const updateCharacters = useUpdateCharacters()
  const usedBy = useRecoilValue(roundState).turnOrder[0]
  const targets = useRecoilValue(charactersState).enemies // !TEMP
  const resetTurn = useResetRecoilState(turnState)
  const { selection } = useRecoilValue(turnState)

  const handleSelectTarget = () => {
    if (!selection) return
    const result = selection?.executeAction?.({ usedBy, targets })
    updateCharacters({ usedBy: result.usedBy, targets: result.targets })
    resetTurn()
  }

  return (
    <div onClick={handleSelectTarget} className='targetMenu'>
      Targeting
    </div>
  )
}

export default TargetMenu
