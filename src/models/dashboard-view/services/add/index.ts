import { Context } from '../../../../app/types/global';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { ViewItem } from '../../types';



/** Add new ViewItem in DB */
export const serviceDashboardViewAdd = async (ctx: Context, viewItem: ViewItem): Promise<undefined> => {
  const userId     = getUserId(ctx);
  const companyId  = getCompanyId(ctx);
  const lastChange = creatorFixDate(userId);

  viewItem.createdAt  = lastChange;
  viewItem.lastChange = lastChange;

  await getRefDoc(DbRef.VIEW, { companyId, id: viewItem.id }).set(viewItem);

  return
};
