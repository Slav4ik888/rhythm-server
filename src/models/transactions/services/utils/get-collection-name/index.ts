import { Context } from '../../../../../app/types/global';
import { DbRefName } from '../../../../helpers';


export const getColName2 = (ctx: Context, dbRefName: DbRefName): DbRefName => {

  switch (dbRefName) {
    case DbRefName.DOCUMENTS: return DbRefName.DOCUMENTS
    case DbRefName.FOLDERS:   return DbRefName.FOLDERS
    case DbRefName.ITEMS:     return DbRefName.DOCUMENTS

    default: throw ctx.throw(400, { general: 'Не настроен запрошенный dbRefName' });
  }
};


export const getColName3 = (ctx: Context, dbRefName: DbRefName): DbRefName | undefined => {

  switch (dbRefName) {
    case DbRefName.DOCUMENTS: return undefined
    case DbRefName.FOLDERS:   return undefined
    case DbRefName.ITEMS:     return DbRefName.ITEMS

    default: throw ctx.throw(400, { general: 'Не настроен запрошенный dbRefName' });
  }
};
