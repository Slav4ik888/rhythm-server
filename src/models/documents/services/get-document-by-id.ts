import { DbRef, getRefDoc } from '../../helpers';
import { Document } from '../types';


/** Returns the document by id */
export async function serviceGetDocumentById(companyId: string, id: string = ''): Promise<Document | undefined> {
  if (! id) return
  
  const documentsDoc = await getRefDoc(DbRef.DOCUMENT, { companyId, id }).get();

  return documentsDoc.exists && documentsDoc.data();
}
