import { Context } from '../../../app/types/global';
import { serviceUpdateDocument } from '../services';
import { PartialDocument } from '../types';
// import { delete as deleteImages } from '../../files';



export interface UpdatedConfig {
  updatedDocument : PartialDocument
  deletedLinks?   : string[]
}


/**
 * @requires body as UpdatedConfig
 */
export const updateDocumentModel = async (ctx: Context): Promise<void> => {
  const
    { updatedDocument, deletedLinks } = ctx.request.body,
    userId = ctx.state.user.id;

  // TODO: Permissions
  
  // TODO: validateDocument(ctx, updatedDocument);

  // UpdateDocument
  await serviceUpdateDocument(updatedDocument, userId);

  // TODO: await deleteImages(ctx, deletedLinks);

  ctx.status = 200;
};
