import { Context } from '../../../app/types/global';
import { validateFolder } from '../validators/validate-folder';
import { serviceUpdateFolder } from '../services';


/**
 * @requires body.folder
 */
export const updateFolderModel = async (ctx: Context): Promise<void> => {
  const { folder } = ctx.request.body;

  validateFolder(ctx, folder);

  // TODO: Permissions

  const updatedFolder = await serviceUpdateFolder(folder, ctx.state.user.id);
  
  ctx.body = { folder: updatedFolder };
};
