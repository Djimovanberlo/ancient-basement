import { Target, TargetArea } from 'interfaces/game/character-actions'
import { Effect } from 'interfaces/game/effect'
import { ElementName, SkillType } from 'interfaces/game/elements'

export interface Action {
  name: string | null
  description: string | null
  element: ElementName | null
  skillType: SkillType | null
  target: Target | null
  targetArea: TargetArea | null
  executeAction: Effect
}
