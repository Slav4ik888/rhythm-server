import { Context } from '../../../../../app/types/global';
import { serviceDashboardViewDeleteGroup } from '../../../services';
import { CardItemId } from '../../../types';


export interface DeleteCard {
  companyId         : string
  parentId          : string
  parentChildrenIds : CardItemId[] // Итоговые Ids актуальных потомков
  allIds            : CardItemId[] // Ids всех удаляемых (вложенных элементов)
}


/**
 * @requires body.folder
 */
export const deleteCardItemModel = async (ctx: Context): Promise<void> => {
  // const { parentId, allIds } = ctx.request.body as DeleteCard;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  // TODO: validateDeleteCardItem (ctx, userData);

  serviceDashboardViewDeleteGroup(ctx, ctx.request.body as DeleteCard);
  
  ctx.status = 200;
  ctx.body = {};
};
