import { Context } from '../../../../../app/types/global';
import { convertToDot } from '../../../../../shared/utils/objects';
import { creatorFixDate } from '../../../../base';
import { getCompanyId } from '../../../../company';
import { DbRef, getRefDoc } from '../../../../helpers';
import { getUserId } from '../../../../user';
import { CardItem } from '../../../types';




/** Update CardItem in DB */
export const serviceDashboardViewUpdate = async (ctx: Context, cardItem: Partial<CardItem>): Promise<undefined> => {
  const userId     = getUserId(ctx);
  const companyId  = getCompanyId(ctx);
  
  cardItem.lastChange = creatorFixDate(userId);

  const dataInDot = convertToDot(cardItem);

  await getRefDoc(DbRef.VIEW, { companyId, id: cardItem.id }).update(dataInDot);

  return
};
