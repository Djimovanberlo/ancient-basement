import { Enemy } from 'interfaces/game/enemy'

interface Props {
  enemy: Enemy
}

const EnemyComponent = ({ enemy }: Props) => {
  return (
    <div className='enemy'>
      <div>{enemy.name}</div>
      <div>{enemy.status.stats.health}</div>
    </div>
  )
}

export default EnemyComponent
