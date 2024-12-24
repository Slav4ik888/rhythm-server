import { Context } from '../../../../app/types/global';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { CardItemId } from '../../types';



/** Delete CardItem from DB */
export const serviceDashboardViewDelete = async (ctx: Context, id: CardItemId): Promise<undefined> => {
  const companyId  = getCompanyId(ctx);
  
  await getRefDoc(DbRef.VIEW, { companyId, id }).delete();

  return
};
