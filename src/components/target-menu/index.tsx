import useUpdateCharacters from 'lib/hooks/game/useUpdateCharacters'
import { useRecoilState, useRecoilValue } from 'recoil'
import { selectActiveTurn } from 'store/round/selectors'
import { turnState } from 'store/turn/atoms'

const TargetMenu = () => {
  const usedBy = useRecoilValue(selectActiveTurn)
  const { targets, selection } = useRecoilValue(turnState)
  const updateCharacters = useUpdateCharacters()

  const handleSelectTarget = () => {
    if (!selection) return
    if ('executeItem' in selection) {
      const { newTargets, newUsedBy } = selection.executeItem({ targets, usedBy })
      updateCharacters({ newUsedBy, newTargets })
      // TODO - update targets and usedBy
    }
    if ('executeAbility' in selection) selection.executeAbility({ targets, usedBy })
  }

  return (
    <div onClick={handleSelectTarget} className='targetMenu'>
      Targeting
    </div>
  )
}

export default TargetMenu
