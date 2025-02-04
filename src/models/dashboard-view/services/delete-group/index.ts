import { Context } from '../../../../app/types/global';
import { db } from '../../../../libs/firebase';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { ViewItemId } from '../../types';



/** Delete group ViewItems from DB */
export const serviceDashboardViewDeleteGroup = async (ctx: Context, allIds: ViewItemId[]): Promise<undefined> => {
  const companyId  = getCompanyId(ctx);
  
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
