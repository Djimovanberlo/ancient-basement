import { useId } from 'react'
import { useRecoilValue } from 'recoil'

import EnemyCard from 'components/enemy'
import battleState from 'store/battle/atoms'

const EnemiesWrapper = () => {
  const id = useId()
  const { enemies } = useRecoilValue(battleState)

  return (
    <div className='enemiesWrapper'>
      {enemies.map((enemy, index) => (
        <EnemyCard key={id + index} enemy={enemy} />
      ))}
    </div>
  )
}

export default EnemiesWrapper
