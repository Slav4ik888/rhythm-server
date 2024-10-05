/** 
 * 2024-03-10
 */
export enum DebugUserAction {
  // FOLDER
  FOLDER_ADD                        = 'Folder.add', 
  FOLDER_CHANGE_LABEL               = 'Folder.change.label',
  FOLDER_UPDATE_LABEL               = 'Folder.update.label',

  // DOCUMENT
  DOCUMENT_PANEL_ADD_BTN            = 'Document.panel.addBtn', // Добавление Document из Panel
  DOCUMENT_UPDATE_LABEL             = 'Document.update.label',

  // ITEMS
  DOCUMENT_FREESPACE_SHEET_ITEM_ADD = 'Document.freespace.sheet_item.add', // Добавление Item на пустое свободное пространство документа
  ITEM_UPDATE                       = 'Item.update'
}

export interface Debug {
  userAction: DebugUserAction
}
