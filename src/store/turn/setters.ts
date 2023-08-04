export {}

// import { HeroActionName } from 'interfaces/game/character-actions'
// import { Turn } from 'interfaces/game/turn'
// import { selector } from 'recoil'
// import { turnState } from './atoms'

// const UPDATE_TURN_ACTION_KEY = 'updateTurnAction'

// export const updateActionSelector = selector<HeroActionName | null>({
//   key: 'UpdateActionSelector',
//   get: ({ get }) => get(turnState).action,
//   set: ({ set }, newValue) =>
//     set(turnState, prevState => ({
//       ...prevState,
//       action: newValue,
//     })),
// })
// // export const updateTurnAction = selector<HeroActionName>({
// //   key: UPDATE_TURN_ACTION_KEY,
// //   set: ({ set, get }, action: HeroActionName) => {
// //     const turn = get(turnState)
// //     const newTurn = { ...turn, action: action }

// //     set(turnState, newTurn)
// //   },
// // })
