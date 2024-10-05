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
    case DbRef.FOLDERS:   return db.collection(DbRef.FOLDERS)  .doc(companyId).collection(DbRef.FOLDERS);
    case DbRef.DOCUMENTS: return db.collection(DbRef.DOCUMENTS).doc(companyId).collection(DbRef.DOCUMENTS);
    
    case DbRef.RULES:
      if (parentId) 
        return db.collection(DbRef.RULES).doc(companyId).collection(DbRef.RULES).doc(parentId).collection(DbRef.RULES);
        return db.collection(DbRef.RULES).doc(companyId).collection(DbRef.RULES);

    case DbRef.ITEMS:
      return db.collection(DbRef.ITEMS).doc(companyId).collection(DbRef.DOCUMENTS).doc(documentId).collection(DbRef.ITEMS);

    default: return null
  }
}
