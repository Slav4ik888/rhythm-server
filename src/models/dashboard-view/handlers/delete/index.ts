import { Context } from '../../../../app/types/global';
import { serviceDashboardViewDeleteGroup } from '../../services';
import { CardItemId } from '../../types';


export interface DeleteCard {
  allIds: CardItemId[] // Ids удаляемого и всех вложенных элементов
}


/**
 * @requires body.folder
 */
export const deleteCardItemModel = async (ctx: Context): Promise<void> => {
  const { allIds = [] } = ctx.request.body as DeleteCard;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  // TODO: validateDeleteCardItem (ctx, userData);

  serviceDashboardViewDeleteGroup(ctx, allIds);
  
  ctx.status = 200;
  ctx.body = {};
};
