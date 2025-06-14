import { Context } from '../../../../app/types/global';
import { convertToDot } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { db } from '../../../../libs/firebase';
import { UpdateViewItem } from '../../handlers/update';



/** Update ViewItem in DB */
export const serviceDashboardUpdateGroupItems = async (ctx: Context, data: UpdateViewItem): Promise<undefined> => {
  const { companyId, viewItems } = data;
  const userId = getUserId(ctx);

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
