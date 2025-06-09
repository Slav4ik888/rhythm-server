import { Context } from '../../../../app/types/global';
import { serviceDashboardViewCreateGroupItems } from '../../services';
import { ViewItem } from '../../types';



export interface AddNewView {
  viewItems: ViewItem[]
}

/**
 * @requires body.AddNewView
 */
export const createGroupViewItemsModel = async (ctx: Context): Promise<void> => {
  const { viewItems } = ctx.request.body as AddNewView;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateNewView(ctx, userData);

  await serviceDashboardViewCreateGroupItems(ctx, viewItems);

  ctx.status = 200;
  ctx.body = {};
};
