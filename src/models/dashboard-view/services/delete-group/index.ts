import { Context } from '../../../../app/types/global';
import { db } from '../../../../libs/firebase';
import { DbRef, getRefDoc } from '../../../helpers';
import { DeleteViews } from '../../handlers/delete';



/** Delete group ViewItems from DB */
export const serviceDashboardViewDeleteGroup = async (ctx: Context, data: DeleteViews): Promise<undefined> => {
  const { allIds, companyId } = data;

  // Get a new write batch
  const batch = db.batch();

  allIds.forEach(id => {
    const ref = getRefDoc(DbRef.VIEW, { companyId, id });
    batch.delete(ref);
  });

  // Commit the batch
  await batch.commit();

  return
};
