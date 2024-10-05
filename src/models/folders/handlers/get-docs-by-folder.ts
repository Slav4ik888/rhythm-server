import { Context } from '../../../app/types/global';
import { serviceGetDocuments } from '../../documents';
import { serviceGetFolders } from '../services';


/**
 * @requires params.folderId
 */
export const getDocsByFolderModel = async (ctx: Context): Promise<void> => {
  const
    folderId = ctx.params.folderId !== 'home' ? ctx.params.folderId : '',
    { companyId } = ctx.state.user;
  
  // TODO: Permissions
  
  const
    folders     = await serviceGetFolders(companyId, folderId),
    documents   = await serviceGetDocuments(companyId, folderId);

  ctx.body = { folders, documents };
};
