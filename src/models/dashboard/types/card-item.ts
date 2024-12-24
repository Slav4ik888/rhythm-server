import { ItemBase } from '../../base'
import { ItemStyles } from './item-styles'

export type CardItemType = 'box'

export type CardItemId = string


// export interface CardItemHeader {
//   sx?: ItemStyles
// }


// export interface CardItemBody {
//   sx?: ItemStyles
// }


export interface CardItem extends ItemBase {
  id           : CardItemId
  parentId     : CardItemId // Where item is child. If no parentId, then parentId === ''
  sheetId      : CardItemId // Main sheet id === ''

  type         : CardItemType
  styles       : ItemStyles
  // content?     : string
  // contentSx?   : ItemStyles
  childrenIds  : CardItemId[]
}
