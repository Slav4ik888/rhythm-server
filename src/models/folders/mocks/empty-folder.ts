import { Condition } from '../../base';
import { MOCK_FIX_DATE } from '../../base/mocks';
import { Folder } from '../types';



export const MOCK_FOLDER_EMPTY_WITH_PARENT: Folder = {
  id         : 'new-folder-123456789',
  condition  : Condition.ACTIVE,
  parentId   : 'parentId-01234567890',
  childIds   : [],
  label      : 'text',
  order      : 1000,
  createdAt  : MOCK_FIX_DATE,
  lastChange : MOCK_FIX_DATE
};
