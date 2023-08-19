import { Character } from 'interfaces/game/character'
import { StatusAndId } from 'interfaces/game/status'
import { extractStatusAndId } from 'lib/game/data-types'
import useUpdateCharacters from 'lib/hooks/game/useUpdateCharacters'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { selectActiveTurn } from 'store/round/selectors'
import { turnState } from 'store/turn/atoms'

const TargetMenu = () => {
  const updateCharacters = useUpdateCharacters()
  const usedBy = useRecoilValue(selectActiveTurn)
  const { targets, selection } = useRecoilValue(turnState)
  const resetTurn = useResetRecoilState(turnState)

  const usedByStatus = extractStatusAndId(usedBy)
  const targetsStatus = targets.map(extractStatusAndId)

  const handleSelectTarget = () => {
    if (!selection) return
    if ('executeItem' in selection) {
      const { newUsedByStatus, newTargetsStatus } = selection.executeItem({ usedByStatus, targetsStatus })
      updateCharacters({ newUsedByStatus, newTargetsStatus })
      resetTurn()
    }
    if ('executeAbility' in selection) selection.executeAbility({ usedByStatus, targetsStatus })
  }

  return (
    <div onClick={handleSelectTarget} className='targetMenu'>
      Targeting
    </div>
  )
}

export default TargetMenu
