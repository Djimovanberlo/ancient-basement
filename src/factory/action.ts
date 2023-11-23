import { Action } from 'interfaces/game/action'

export const createAction = (partialAction: Partial<Action>): Action => ({
  name: null,
  description: null,
  element: null,
  skillType: null,
  target: null,
  targetArea: null,
  executeAction: characterActionActors => characterActionActors,
  ...partialAction,
})
