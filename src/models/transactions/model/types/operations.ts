import { Context } from '../../../../app/types/global';
import { DbRefName } from '../../../helpers';
import { GetDocPathOperation } from '../../services/utils';
import { OperationArguments } from './args';


/** v.2024-04-07 */
export enum OperationCommand {
  // ADD                   = 'add', // Add new char | Item
  SET                   = 'set',
  UPDATE                = 'update',
  INSERT_CHILDREN_AFTER = 'insertChildrenAfter', // При добавлении новой страницы
  LIST_AFTER            = 'listAfter', // При добавлении пункта списка
  // LIST_REMOVE = 'listRemove',
  DELETE                = 'delete',
  DELETE_LIST           = 'deleteList',
}

export interface OperationPointer {
  id        : string // Id главного элемента по отношению к которому выполняется действие
  // parentId? : string
  dbRefName : DbRefName
}

export interface Operation {
  path    : string[]         // [] | ['properties', 'title']
  command : OperationCommand // 'add' | 'update'
  pointer : OperationPointer
  args    : OperationArguments
}

/**
 * v.2024-04-07
 * For operationSet | Update | Delete | ListAfter & other
 */
export interface OperationData {
  ctx       : Context
  operation : GetDocPathOperation
  // pointer     : OperationPointer
  // data        : any
  // collection1 : DbRefName
  // collection2 : DbRefName
  // collection3 : DbRefName
}
