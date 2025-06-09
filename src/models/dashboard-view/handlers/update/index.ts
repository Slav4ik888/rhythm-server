import { Context } from '../../../../app/types/global';
import { serviceDashboardUpdateGroupItems } from '../../services';
import { PartialViewItem } from '../../types';



export interface UpdateViewItem {
  viewItems: PartialViewItem[]
}

/**
 * @requires body.UpdateViewItem
 */
export const updateGroupViewItemsModel = async (ctx: Context): Promise<void> => {
  const { viewItems } = ctx.request.body as UpdateViewItem;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateUpdateViewItem (ctx, userData);

  await serviceDashboardUpdateGroupItems(ctx, viewItems);

  ctx.status = 200;
  ctx.body = {};
};
