import { OptionalRecord } from '../../../app/types/global';

/**
 * Выбранный стиль для Item документа
 */
export enum ItemStyleVariant {
  DEFAULT = 'default',
  GLOBAL  = 'global',
  CURRENT = 'current' // Only for current Document
}


export enum ItemStyleType {
  STYLE1  = 'style1',
  STYLE2  = 'style2',
  STYLE3  = 'style3',
  STYLE4  = 'style4',
  STYLE5  = 'style5',
  STYLE6  = 'style6',
  STYLE7  = 'style7',
  STYLE8  = 'style8',
  STYLE9  = 'style9',
  STYLE10 = 'style10',
  STYLE11 = 'style11',
  STYLE12 = 'style12',
  STYLE13 = 'style13',
  STYLE14 = 'style14',
  STYLE15 = 'style15',
  STYLE16 = 'style16',
  STYLE17 = 'style17',
  STYLE18 = 'style18'
}


export interface ItemStyle {
  mt?           : number // 1 = 8px
  mr?           : number
  mb?           : number
  ml?           : number

  pt?           : number // 1 = 8px
  pr?           : number
  pb?           : number
  pl?           : number

  align?        : 'left' | 'right' | 'center'

  fontFamily?   : string
  fontSize?     : string
  fontWeight?   : number

  color?        : string
  background?   : string

  borderStyle?  : 'none' | 'hidden' | 'dotted' | 'dashed ' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
  borderRadius? : string
  borderColor?  : string
  borderWidth?  : string
  borderTop?    : string
  borderLeft?   : string
  borderRight?  : string
  borderBottom? : string
}


// MAP STYLES TYPE
interface ItemStylesItem {
  name  : string
  order : number
  sx    : ItemStyle
}


export type ItemMapStyles = OptionalRecord<ItemStyleType, ItemStylesItem>
