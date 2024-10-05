import { DbRef, getRefDoc } from '../../helpers';
import { Folder } from '../types';



/** Get Breadcrumbs (folders) for activeFolder */
export async function serviceGetBreadcrumbs(
  companyId: string,
  activeFolderId: string
): Promise<Array<Folder>> {
  if (! activeFolderId) return []
  
  let
    breadcrumbs = [],
    parentId = activeFolderId; // First get activeFolderId
  
  while (parentId) {
    const foldersDoc = await getRefDoc(DbRef.FOLDER, { companyId, folderId: parentId }).get();

    if (foldersDoc.exists) {
      const folder = foldersDoc.data() as Folder;
      breadcrumbs.push(folder);
      parentId = folder.parentId;
    }
    else parentId = ''
  }


  return breadcrumbs;
}
