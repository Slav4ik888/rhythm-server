import { Context } from '../../../../app/types/global';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { CardItem } from '../../types';



/** Add new CardItem in DB */
export const serviceDashboardViewAdd = async (ctx: Context, cardItem: CardItem): Promise<undefined> => {
  const userId     = getUserId(ctx);
  const companyId  = getCompanyId(ctx);
  const lastChange = creatorFixDate(userId);

  cardItem.createdAt  = lastChange;
  cardItem.lastChange = lastChange;

  await getRefDoc(DbRef.VIEW, { companyId, id: cardItem.id }).set(cardItem);

  return
};
