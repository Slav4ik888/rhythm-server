import { Context } from '../../../../app/types/global';
import { convertToDot } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { PartialViewItem } from '../../types';



/** Update ViewItem in DB */
export const serviceDashboardViewUpdate = async (ctx: Context, viewItem: PartialViewItem): Promise<undefined> => {
  const userId    = getUserId(ctx);
  const companyId = getCompanyId(ctx);
  
  viewItem.lastChange = creatorFixDate(userId);

  const dataInDot = convertToDot(viewItem);

  await getRefDoc(DbRef.VIEW, { companyId, id: viewItem.id }).update(dataInDot);

  return
};
