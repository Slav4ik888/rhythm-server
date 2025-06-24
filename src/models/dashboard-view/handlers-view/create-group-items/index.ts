import { Context } from '../../../../app/types/global';
import { serviceDashboardViewCreateGroupItems } from '../../services';
import { ViewItem } from '../../types';



export interface AddNewViews {
  viewUpdatedMs : number
  companyId     : string
  viewItems     : ViewItem[]
}

/**
 * @requires body.AddNewViews
 */
export const createGroupViewItemsModel = async (ctx: Context): Promise<void> => {
  const { viewItems, companyId, viewUpdatedMs } = ctx.request.body as AddNewViews;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated

  // TODO: validateNewView(ctx, userData);

  if (! companyId || ! viewItems || ! viewItems?.length || ! viewUpdatedMs ) {
    ctx.throw(400, 'invalid body required field');
  }

  await serviceDashboardViewCreateGroupItems(ctx);

  ctx.status = 200;
  ctx.body = {};
};
