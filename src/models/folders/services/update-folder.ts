import { Folder } from '..';
import { creatorFixDate } from '../../base';
import { DbRef, getRefDoc } from '../../helpers';



/** Update Folder in DB */
export const serviceUpdateFolder = async (folder: Folder, userId: string): Promise<Folder> => {
  const
    // companyId = folder.companyId,
    folderId  = folder.id;
  
  folder.lastChange = creatorFixDate(userId);

  // await getRefDoc(DbRef.FOLDER, { companyId, folderId }).update(folder);


  return folder
};
