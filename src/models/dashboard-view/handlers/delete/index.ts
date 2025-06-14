import { Context } from '../../../../app/types/global';
import { serviceDashboardViewDeleteGroup } from '../../services';
import { ViewItemId } from '../../types';


export interface DeleteViews {
  companyId : string
  allIds    : ViewItemId[] // Ids удаляемого и всех вложенных элементов
}

/**
 * @requires body.folder
 */
export const deleteViewItemModel = async (ctx: Context): Promise<void> => {
  const { allIds = [], companyId } = ctx.request.body as DeleteViews;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  // TODO: validateDeleteViewItem (ctx, userData);

  await serviceDashboardViewDeleteGroup(ctx, { allIds, companyId });

  ctx.status = 200;
  ctx.body = {};
};
