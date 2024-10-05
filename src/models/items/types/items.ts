import { ItemBase } from '../../base';
import { ItemStyleType, ItemStyleVariant } from './item-style';




export enum ItemType {
  // SIMPLE
  // HEADING = 'heading', // Headings in different sizes
  TEXT    = 'text',    // Varios descriptions and explanations
  // LIST    = 'list',
  IMAGE   = 'image',
  
  // COMPLEX
  BOX     = 'box',     // A Box that can contain any type of item

  // RULE
  RULE    = 'rule'
}


export enum ItemListType {
  EMPTY   = 'empty',
  DOT     = 'dot',
  DASH    = 'dash',
  DIGITAL = 'digital'
}



/**
 * Возможно пригодится позже, для усложнения структуры. Какая именно будет реализация - не известно.
 */ 
export interface ItemFormat {
  // TODO
}


/** v.2024-03-10 */
export interface Item extends ItemBase {
  // Basic
  // id            : string
  // parentId?     : string // This is Id, if parent Item type === ItemType.BOX
  documentId    : string // In which document present
  sheetId       : string // SheetId
  type          : ItemType
  // order         : number21
  // label?        : ItemLabel // In: HEADING | TEXT | LIST | IMAGE | BOX (not in Rule)
  body          : string // JSON.stringify(DeltaStatic)

  // Styles
  styleVariant? : ItemStyleVariant // DEFAULT | GLOBAL | CURRENT
  styleType?    : ItemStyleType
  
  // sx?        : ItemStyle // Убрал, чтобы стиль можно было менять только в styleType а затем его выбирать
  // format?    : ItemFormat

  // Additional for Rule
  anchor?       : string // RuleId for link to it
  ruleId?       : string // RuleId if ItemType.RULE
}
