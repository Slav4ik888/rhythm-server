import { Context } from '../../../../app/types/global';
import { serviceDashboardViewCreateGroupItems } from '../../services';
import { ViewItem } from '../../types';



export interface AddNewViews {
  companyId : string
  viewItems : ViewItem[]
}

/**
 * @requires body.AddNewViews
 */
export const createGroupViewItemsModel = async (ctx: Context): Promise<void> => {
  const { viewItems, companyId } = ctx.request.body as AddNewViews;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateNewView(ctx, userData);

  await serviceDashboardViewCreateGroupItems(ctx, { viewItems, companyId });

  ctx.status = 200;
  ctx.body = {};
};
