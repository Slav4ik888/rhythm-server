import { Context } from '../../../../app/types/global';
import { BunchAction } from '../../../../shared/lib/structures/bunch';
import { serviceUpdateTemplate } from '../../services';
import { PartialTemplate, Template } from '../../types';



export interface UpdateTemplate {
  bunchUpdatedMs : number
  template       : Template | PartialTemplate // Add | Update
  bunchAction    : BunchAction
}

/**
 * @requires body.AddNewViews
 */
export const updateTemplateModel = async (ctx: Context): Promise<void> => {
  const { template, bunchUpdatedMs, bunchAction } = ctx.request.body as UpdateTemplate;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateNewView(ctx, userData);

  if (! template || ! bunchUpdatedMs || ! bunchAction ) {
    ctx.throw(400, 'invalid body required field');
  }

  const updated = await serviceUpdateTemplate(ctx);

  ctx.body = updated;
};
