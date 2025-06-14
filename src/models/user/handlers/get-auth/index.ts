import { Context } from '../../../../app/types/global';
import { Company, serviceGetCompany } from '../../../company';
import { NO_SHEET_ID } from '../../../dashboard-view/consts';
import { serviceDashboardViewGetViewsBySheetId } from '../../../dashboard-view/services';
import { ViewItem } from '../../../dashboard-view/types';
import { serviceGetUser } from '../../services';
import { User } from '../../types';



/** 2025-06-13 */
interface ResGetAuth {
  userData      : User
  companyData   : Company
}


/**
 *
 * @requires body
 */
export async function getAuthModel(ctx: Context): Promise<any> {
  const { id, companyId } = ctx.state.user;

  // Get folders
  // ctx.state.return = true;

  const userData      = await serviceGetUser(companyId, id);
  const companyData   = await serviceGetCompany(companyId);

  ctx.body = {
    userData, companyData
  };
}
