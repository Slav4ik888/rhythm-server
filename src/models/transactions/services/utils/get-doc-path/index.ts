import { db } from '../../../../../libs/firebase';
import { DocumentData, CollectionReference } from 'firebase/firebase-firestore';
import { OperationPointer } from '../../../model/types';
import { getColName2, getColName3 } from '..';
import { Context } from '../../../../../app/types/global';
import { getCompanyId } from '../../../../companies';
import { FixDate } from '../../../../base';


export interface GetDocPathOperation {
  pointer : OperationPointer
  path?   : string[]
  args    : {
    id          : string
    ids?        : string[]
    after?      : string
    createdAt?  : FixDate
    lastChange? : FixDate
  }
}

export const getDocPath = (
  ctx       : Context,
  operation : GetDocPathOperation
): CollectionReference<DocumentData> => {
  const
    { dbRefName, id } = operation.pointer,
    companyId = getCompanyId(ctx),
    colName2  = getColName2(ctx, dbRefName),
    colName3  = getColName3(ctx, dbRefName);
    
  // 'items/${companyId}/documents/${documentId}/items/${itemId}
  console.log(`${dbRefName}/${companyId}/${colName2}/${id}` + (colName3 ? `/${colName3}/${operation.args.id}` : ''));

  const basePath = db
    .collection(dbRefName) // 1 LVL - DbRefName.DOCUMENTS
    .doc(companyId)
    .collection(colName2)  // 2 LVL - DbRefName.DOCUMENTS
    .doc(id);
  

  return ! colName3 
    ? basePath
    : basePath
      .collection(colName3) // 3 LVL - DbRefName.ITEMS
      .doc(operation.args.id)
};
