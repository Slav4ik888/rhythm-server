import { Context } from '../../../../app/types/global';
import { convertToDot } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { PartialViewItem } from '../../types';
import { db } from '../../../../libs/firebase';



/** Update ViewItem in DB */
export const serviceDashboardUpdateGroupItems = async (ctx: Context, viewItems: PartialViewItem[]): Promise<undefined> => {
  const userId    = getUserId(ctx);
  const companyId = getCompanyId(ctx);

  // Get a new write batch
  const batch = db.batch();

  viewItems.forEach(item => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id: item.id });
    const viewItem = {
      ...item,
      lastChange: creatorFixDate(userId)
    };
    batch.update(ref, convertToDot(viewItem));
  });

  // Commit the batch
  await batch.commit();

  return
};
