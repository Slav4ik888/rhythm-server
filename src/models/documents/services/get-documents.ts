import { DbRef, getRefCol } from '../../helpers';


/**
 * Get all documents that are in this folder
*/
export async function serviceGetDocuments(companyId: string, parentId: string = '') {
  const documents  = [];
  
  const documentsRes = await getRefCol(DbRef.DOCUMENTS, { companyId })
    .where('parentId', '==', parentId)
    .get();

  if (! documentsRes?.empty) documentsRes.forEach(f => documents.push(f.data()))

  return documents;
}
