import { Context } from '../../../../../app/types/global';
import { serviceDashboardViewUpdate } from '../../../services';
import { CardItem } from '../../../types';



export interface UpdateCardItem {
  cardItem : Partial<CardItem> // with id
}

/**
 * @requires body.UpdateCardItem
 */
export const updateCardItemModel = async (ctx: Context): Promise<void> => {
  const { cardItem } = ctx.request.body as UpdateCardItem;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  
  // TODO: validateUpdateCardItem (ctx, userData);

  await serviceDashboardViewUpdate(ctx, cardItem);
  
  ctx.status = 200;
  ctx.body = {};
};
