import { Resource } from 'interfaces/game/resources'

interface Props {
  resourceType: Resource
  maxValue: number
  currentValue: number
}

const ResourceBar = ({ resourceType, maxValue, currentValue }: Props) => {
  const width = (currentValue / maxValue) * 100

  return (
    <div className='resourceBar'>
      <div className={`resourceBar__current resourceBar__current__${resourceType}`} data-resource={resourceType} style={{ width: `${width}%` }} />
    </div>
  )
}

export default ResourceBar
