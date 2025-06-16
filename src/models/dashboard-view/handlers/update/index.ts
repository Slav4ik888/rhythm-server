import { Context } from '../../../../app/types/global';
import { serviceDashboardUpdateGroupItems } from '../../services';
import { PartialViewItem } from '../../types';



export interface UpdateViewItem {
  viewUpdatedMs : number
  companyId     : string
  viewItems     : PartialViewItem[]
}

/**
 * @requires body.UpdateViewItem
 */
export const updateGroupViewItemsModel = async (ctx: Context): Promise<void> => {
  const { viewItems, companyId, viewUpdatedMs } = ctx.request.body as UpdateViewItem;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateUpdateViewItem (ctx, userData);
  if (! companyId || ! viewItems || ! viewItems?.length || ! viewUpdatedMs ) {
    ctx.throw(400, 'invalid body required field');
  }

  await serviceDashboardUpdateGroupItems(ctx);

  ctx.status = 200;
  ctx.body = {};
};
