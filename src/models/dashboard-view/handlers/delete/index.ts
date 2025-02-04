import { Context } from '../../../../app/types/global';
import { serviceDashboardViewDeleteGroup } from '../../services';
import { ViewItemId } from '../../types';


export interface DeleteView {
  allIds: ViewItemId[] // Ids удаляемого и всех вложенных элементов
}


/**
 * @requires body.folder
 */
export const deleteViewItemModel = async (ctx: Context): Promise<void> => {
  const { allIds = [] } = ctx.request.body as DeleteView;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  // TODO: validateDeleteViewItem (ctx, userData);

  serviceDashboardViewDeleteGroup(ctx, allIds);
  
  ctx.status = 200;
  ctx.body = {};
};
