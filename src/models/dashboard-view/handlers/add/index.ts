import { Context } from '../../../../app/types/global';
import { serviceDashboardViewAdd } from '../../services';
import { CardItem } from '../../types';



export interface AddNewCard {
  cardItem: CardItem
}

/**
 * @requires body.AddNewCard
 */
export const addCardItemModel = async (ctx: Context): Promise<void> => {
  const { cardItem } = ctx.request.body as AddNewCard;
  
  // TODO: Permissions
  // TODO: Remove fields that are not allowed to be updated
  
  // TODO: validateNewCard(ctx, userData);

  await serviceDashboardViewAdd(ctx, cardItem);

  ctx.status = 200;
  ctx.body = {};
};
