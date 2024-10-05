import { DbRef, getRefDoc } from '../../helpers';
import { Folder } from '../types';


/** Returns the folder by id */
export async function serviceGetFolderById(companyId: string, folderId: string = ''): Promise<Folder | undefined> {
  if (! folderId) return
  
  const foldersDoc = await getRefDoc(DbRef.FOLDER, { companyId, folderId }).get();

  if (foldersDoc.exists) return foldersDoc.data()

  return;
}
