import { Context } from '../../../../app/types/global';
import { serviceDashboardViewUpdate } from '../../services';
import { PartialViewItem } from '../../types';



export interface UpdateViewItem {
  viewItem: PartialViewItem
}

/**
 * @requires body.UpdateViewItem
 */
export const updateViewItemModel = async (ctx: Context): Promise<void> => {
  const { viewItem } = ctx.request.body as UpdateViewItem;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  
  // TODO: validateUpdateViewItem (ctx, userData);

  await serviceDashboardViewUpdate(ctx, viewItem);
  
  ctx.status = 200;
  ctx.body = {};
};
