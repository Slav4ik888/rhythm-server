import { db } from '../../../libs/firebase';
import { DocumentData, CollectionReference } from 'firebase/firebase-firestore';
import { DbRef } from '../types';



interface Data {
  userId?     : string
  companyId?  : string
  parentId?   : string
  documentId? : string
}


/** Ref */
export const getRefCol = (type: DbRef, data: Data = {}): CollectionReference<DocumentData> => {
  const { userId, companyId, parentId, documentId } = data;

  switch (type) {
    case DbRef.COMPANIES: return db.collection(DbRef.COMPANIES);

    default: return null
  }
}
