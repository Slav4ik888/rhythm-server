import { Context } from '../../../app/types/global';
import { validateFolder } from '../validators/validate-folder';
import { serviceAddFolder } from '../services';


/**
 * @requires body.folder
 */
export const addFolderModel = async (ctx: Context): Promise<void> => {
  const { folder } = ctx.request.body;

  validateFolder(ctx, folder);

  // TODO: Permissions

  const newFolder = await serviceAddFolder(folder, ctx.state.user.id);
  
  ctx.body = { newFolder };
};
