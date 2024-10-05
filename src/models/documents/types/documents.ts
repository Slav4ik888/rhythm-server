import { ItemBase, ReqDocFields } from '../../base'
import { ItemMapStyles } from '../../items/types'


export interface Sheet {
  itemIds: string[] // Sorted Ids DocumentItem
}

/** v.2024-04-06 */
export interface DocumentSheetsBase {
  [id: string]: Sheet
}


/** v.2024-04-06 */
export type DocumentSheets = DocumentSheetsBase & {
  /**
 * Основная часть - здесь все добавленные правила и оформление: заголовки и тд
 * формируется пользователем.
 */
  mainSheet           : Sheet
  /**
   * Титульный лист
   */
  titleSheet?         : Sheet
  /**
   * Краткий обзор - это может быть "Содержание", в котором главы со ссылками на них
   * или для ДП это специальный лист в котором приводится краткий обзор должности
   * и упорядочивается список обязанностей, а внутри документа (Основной части),
   * эти обязанности распределяются в этой же последовательности.
   */
  briefOverviewSheet? : Sheet
}



/**
 * v.2024-04-06
 * Инструкции, должностные папки, Оргполитика, приказы и прочие документы,
 * в которых находятся Rules
 * TODO: при добавлении/переносе Rule в Document, parentId меняется на document.id
 */
export interface Document extends ItemBase {
  // Sheets structure
  sheets: DocumentSheets
  

  // TODO - должны быть только ссылки (id) этих страниц, они должны подгружаться только при их открытии
  // * Контрольный лист    - для освоения этого документа
  //                         формируется автоматически из созданных заданий в Правилах,
  //                         упорядочивается в той же последовательности, как обязанности.
  // * Аттестационный лист - возможность провести аттестацию (возможно это "Проверочное задание")
  //                         формируется автоматически.
  // * Проверочное задание - список вопросов, для периодического обновления знаний, формируется автоматически.
  // * Инспекционный лист  - список того, что нужно проверить, формируется автоматически.
  
  selectedStyles?     : ItemMapStyles // All selected styles, if selected CURRENT
  // selectedStyleType? : DocumentSelectedStyleType / Вроде это не нужно / по умолчанию - DEFAULT
}

export type PartialDocument = ReqDocFields & Partial<Document>
