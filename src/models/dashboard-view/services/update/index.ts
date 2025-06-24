import { Context } from '../../../../app/types/global';
import { convertToDot } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { db } from '../../../../libs/firebase';
import { UpdateViewItem } from '../../handlers-view/update';



/** Update ViewItem in DB */
export const serviceDashboardUpdateGroupItems = async (ctx: Context): Promise<undefined> => {
  const { viewItems, companyId, viewUpdatedMs } = ctx.request.body as UpdateViewItem;
  const userId = getUserId(ctx);
  const fixDate = creatorFixDate(userId, viewUpdatedMs);

  // Get a new write batch
  const batch = db.batch();

  viewItems.forEach(item => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id: item.id });
    const viewItem = {
      ...item,
      lastChange: fixDate
    };
    batch.update(ref, convertToDot(viewItem));
  });

  // Update the company viewUpdated
  const ref = getRefDoc(DbRef.COMPANY, { companyId });
  batch.update(ref, { viewUpdated: fixDate });

  // Commit the batch
  await batch.commit();

  return
};
