import { Folder } from '..';
import { creatorFixDate } from '../../base';
import { DbRef, getRefCol, getRefDoc } from '../../helpers';



/** Add new Folder in DB */
export const serviceAddFolder = async (folder: Folder, userId: string): Promise<Folder> => {
  // const
  //   folderRef = await getRefCol(DbRef.FOLDERS, { companyId }).add(folder),
  //   folderId  = folderRef.id;
  
  // folder.id         = folderId;
  // folder.createdAt  = creatorFixDate(userId);
  // folder.lastChange = creatorFixDate(userId);

  // // Complection folder
  // await getRefDoc(DbRef.FOLDER, { companyId, folderId }).update({
  //   id         : folder.id,
  //   createdAt  : folder.createdAt,
  //   lastChange : folder.lastChange
  // });


  return folder
};
