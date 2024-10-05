import { Context } from '../../../app/types/global';
// import { validateDocument } from '../validators/validate-document';
import { serviceAddDocument } from '../services';


/**
 * @requires body.document
 */
export const addDocumentModel = async (ctx: Context): Promise<void> => {
  const { document } = ctx.request.body;

  // TODO: validateDocument(ctx, document);

  // TODO: Permissions

  const { newDocument } = await serviceAddDocument(ctx, document, ctx.state.user.id);
  
  ctx.body = { newDocument };
};
