import { Context } from '../../../../app/types/global';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { db } from '../../../../libs/firebase';
import { AddNewViews } from '../../handlers/create-group-items';



/** Create new ViewItems in DB */
export const serviceDashboardViewCreateGroupItems = async (ctx: Context): Promise<undefined> => {
  const { viewItems, companyId, viewUpdatedMs } = ctx.request.body as AddNewViews;
  const userId = getUserId(ctx);
  const fixDate = creatorFixDate(userId, viewUpdatedMs);

  // Get a new write batch
  const batch = db.batch();

  viewItems.forEach(item => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id: item.id });
    const viewItem = {
      ...item,
      createdAt  : fixDate,
      lastChange : fixDate,
    };
    batch.set(ref, viewItem);
  });

  // Update the company viewUpdated
  const ref = getRefDoc(DbRef.COMPANY, { companyId });
  batch.update(ref, { viewUpdated : fixDate });

  // Commit the batch
  await batch.commit();

  return
};
