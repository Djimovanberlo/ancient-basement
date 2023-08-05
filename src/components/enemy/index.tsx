import { useRecoilValue } from 'recoil'
import { turnState } from 'store/turn/atoms'

const Enemy = () => {
  const { targets } = useRecoilValue(turnState)

  return (
    <div className='enemy'>
      <div>{targets[0].name}</div>
      <div>{targets[0].stats.health}</div>
    </div>
  )
}

export default Enemy
