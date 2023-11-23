import { Character } from 'interfaces/game/character'

interface Props {
  enemy: Character
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
