import { useRecoilState, useRecoilValue } from 'recoil'
import { selectActiveTurn } from 'store/round/selectors'
import { turnState } from 'store/turn/atoms'

const TargetMenu = () => {
  const usedBy = useRecoilValue(selectActiveTurn)
  const { targets, selection } = useRecoilValue(turnState)

  const handleTargetClick = () => {
    // const {} = selection
  }

  return <div className='targetMenu'>Targeting</div>
}

export default TargetMenu
