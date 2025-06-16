import { Context } from '../../../../app/types/global';
import { db } from '../../../../libs/firebase';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { DeleteViews } from '../../handlers/delete';



/** Delete group ViewItems from DB */
export const serviceDashboardViewDeleteGroup = async (ctx: Context): Promise<undefined> => {
  const { allIds, companyId, viewUpdatedMs } = ctx.request.body as DeleteViews;

  // Get a new write batch
  const batch = db.batch();

  allIds.forEach(id => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id });
    batch.delete(ref);
  });

  // Update the company viewUpdated
  const ref = getRefDoc(DbRef.COMPANY, { companyId });
  batch.update(ref, { viewUpdated: creatorFixDate(getUserId(ctx), viewUpdatedMs) });

  // Commit the batch
  await batch.commit();

  return
};
