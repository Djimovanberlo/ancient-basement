import { Resource } from 'interfaces/game/resources'

const ResourceBar = ({ resourceType }: { resourceType: Resource }) => {
  const width = Math.round(Math.floor(Math.random() * (100 - 10 + 1) + 10))

  return (
    <div className='resourceBar'>
      <div className={`resourceBar__current resourceBar__current__${resourceType}`} style={{ width: `${width}%` }} />
    </div>
  )
}

export default ResourceBar
