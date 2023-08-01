export enum ActionNames {
  ATTACK = 'attack',
  DEFEND = 'defend',
  ABILITY = 'ability',
  ITEM = 'item',
  INVENTORY = 'inventory',
}

export type Turn = Record<ActionNames, { isSelected: false }>
