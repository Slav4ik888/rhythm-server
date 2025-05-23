import { db } from '../../../libs/firebase';
import { DocumentData, DocumentReference } from 'firebase/firebase-firestore';
import { DbRef } from '../types';



interface Data {
  companyId? : string
  userId?    : string
  id?        : string
}


/** Ref to document */
export const getRefDoc = (type: DbRef, data: Data = {}): DocumentReference<DocumentData> => {
  const { companyId, userId, id } = data;
  
  // const notUserType = type !== DbRef.USER;
  // if (notUserType && !data?.companyId) return undefined;

  switch (type) {
    case DbRef.USER:     return db.collection(DbRef.USERS)    .doc(companyId).collection(DbRef.USERS).doc(userId);
    case DbRef.COMPANY:  return db.collection(DbRef.COMPANIES).doc(companyId);
    case DbRef.VIEW:     return db.collection(DbRef.VIEWS)    .doc(companyId).collection(DbRef.VIEWS).doc(id);
    
    default: return null
  }
}
