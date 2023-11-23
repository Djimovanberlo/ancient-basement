import { ActionName } from 'interfaces/game/character-actions'
import { Action } from 'interfaces/game/action'

export interface Turn {
  action: ActionName | null
  targeting: boolean
  selection: Action | null
}
