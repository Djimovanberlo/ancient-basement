import { Enemy } from 'interfaces/game/enemy'

interface Props {
  enemy: Enemy
}

const EnemyCard = ({ enemy }: Props) => {
  return (
    <div className='enemy'>
      <div>{enemy.name}</div>
      <div>{enemy.status.stats.health}</div>
    </div>
  )
}

export default EnemyCard
