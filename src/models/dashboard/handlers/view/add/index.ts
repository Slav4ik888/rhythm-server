import { Context } from '../../../../../app/types/global';
import { NO_PARENT_ID } from '../../../consts';
import { serviceDashboardViewAdd, serviceDashboardViewUpdate } from '../../../services';
import { CardItem, CardItemId } from '../../../types';



export interface AddNewCard {
  cardItem    : CardItem
  childrenIds : CardItemId[] // Parent childrenIds
}

/**
 * @requires body.AddNewCard
 */
export const addCardItemModel = async (ctx: Context): Promise<void> => {
  const { cardItem, childrenIds } = ctx.request.body as AddNewCard;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  
  // TODO: validateNewCard(ctx, userData);

  await serviceDashboardViewAdd(ctx, cardItem);

  if (cardItem.parentId !== NO_PARENT_ID) {
    await serviceDashboardViewUpdate(ctx, { id: cardItem.parentId, childrenIds });
  }
  
  ctx.status = 200;
  ctx.body = {};
};
