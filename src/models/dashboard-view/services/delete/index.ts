import { Context } from '../../../../app/types/global';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { ViewItemId } from '../../types';



/** Delete ViewItem from DB */
export const serviceDashboardViewDelete = async (ctx: Context, id: ViewItemId): Promise<undefined> => {
  const companyId  = getCompanyId(ctx);
  
  await getRefDoc(DbRef.VIEW, { companyId, id }).delete();

  return
};
