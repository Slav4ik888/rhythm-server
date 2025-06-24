import { Context } from '../../../../app/types/global';
import { serviceDashboardViewDeleteGroup } from '../../services';
import { ViewItemId } from '../../types';


export interface DeleteViews {
  viewUpdatedMs : number
  companyId     : string
  allIds        : ViewItemId[] // Ids удаляемого и всех вложенных элементов
}

/**
 * @requires body.folder
 */
export const deleteViewItemModel = async (ctx: Context): Promise<void> => {
  const { allIds = [], companyId, viewUpdatedMs } = ctx.request.body as DeleteViews;

  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  // TODO: validateDeleteViewItem (ctx, userData);
  if (! companyId || ! allIds || ! allIds?.length || ! viewUpdatedMs ) {
    ctx.throw(400, 'invalid body required field');
  }

  await serviceDashboardViewDeleteGroup(ctx);

  ctx.status = 200;
  ctx.body = {};
};
