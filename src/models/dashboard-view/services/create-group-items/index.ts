import { Context } from '../../../../app/types/global';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { ViewItem } from '../../types';
import { db } from '../../../../libs/firebase';



/** Create new ViewItems in DB */
export const serviceDashboardViewCreateGroupItems = async (ctx: Context, viewItems: ViewItem[]): Promise<undefined> => {
  const userId    = getUserId(ctx);
  const companyId = getCompanyId(ctx);

  // Get a new write batch
  const batch = db.batch();

  viewItems.forEach(item => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id: item.id });
    const viewItem = {
      ...item,
      createdAt  : creatorFixDate(userId),
      lastChange : creatorFixDate(userId)
    };
    batch.set(ref, viewItem);
  });

  // Commit the batch
  await batch.commit();

  return
};
