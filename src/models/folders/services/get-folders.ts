import { DbRef, getRefCol } from '../../helpers';


/**
 * Get all folders that are in this folder
*/
export async function serviceGetFolders(companyId: string, parentId: string = '') {
  const folders  = [];
  
  const foldersRes = await getRefCol(DbRef.FOLDERS, { companyId })
    .where('parentId', '==', parentId)
    .get();

  if (! foldersRes?.empty) foldersRes.forEach(f => folders.push(f.data()))

  return folders;
}
