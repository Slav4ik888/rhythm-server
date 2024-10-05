import { db } from '../../../libs/firebase';
import { DocumentData, DocumentReference } from 'firebase/firebase-firestore';
import { DbRef } from '../types';



interface Data {
  companyId? : string
  userId?    : string
  folderId?  : string
  id?        : string
  parentId?  : string
}


/** Ref */
export const getRefDoc = (type: DbRef, data: Data = {}): DocumentReference<DocumentData> => {
  const { companyId, userId, folderId, id, parentId } = data;
  
  // const notUserType = type !== DbRef.USER;
  // if (notUserType && !data?.companyId) return undefined;

  switch (type) {
    case DbRef.USER:     return db.collection(DbRef.USERS)    .doc(companyId).collection(DbRef.USERS)    .doc(userId);
    case DbRef.COMPANY:  return db.collection(DbRef.COMPANIES).doc(companyId);
    case DbRef.FOLDER:   return db.collection(DbRef.FOLDERS)  .doc(companyId).collection(DbRef.FOLDERS)  .doc(folderId);
    case DbRef.DOCUMENT: return db.collection(DbRef.DOCUMENTS).doc(companyId).collection(DbRef.DOCUMENTS).doc(id);
    
    case DbRef.RULE:
      if (parentId)
        return db.collection(DbRef.RULES).doc(companyId).collection(DbRef.RULES).doc(parentId).collection(DbRef.RULES).doc(id);
        return db.collection(DbRef.RULES).doc(companyId).collection(DbRef.RULES).doc(id);
    
    case DbRef.RULE_TITLE:
      if (parentId)
        return db.collection(DbRef.RULE_TITLES).doc(companyId).collection(DbRef.RULE_TITLES).doc(parentId).collection(DbRef.RULE_TITLES).doc(id);
        return db.collection(DbRef.RULE_TITLES).doc(companyId).collection(DbRef.RULE_TITLES).doc(id);
    
    default: return null
  }
}
