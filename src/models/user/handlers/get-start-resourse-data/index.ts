import { Context } from '../../../../app/types/global';
import { Company, serviceGetCompany } from '../../../company';
import { NO_SHEET_ID } from '../../../dashboard-view/consts';
import { serviceDashboardViewGetCardsBySheetId } from '../../../dashboard-view/services';
import { CardItem } from '../../../dashboard-view/types';
import { serviceGetUser } from '../../services';
import { User } from '../../types';



/** 2024-12-25 */
interface ResGetStartResourseData {
  userData      : User
  companyData   : Company
  dashboardView : CardItem[]
}


/**
 * 
 * @requires body.activeFolder 
 */
export async function getStartResourseDataModel(ctx: Context): Promise<any> {
  const { id, companyId } = ctx.state.user;
  const { sheetId = NO_SHEET_ID } = ctx.params;


  // Get folders
  // ctx.state.return = true;

  const userData      = await serviceGetUser(companyId, id);
  const companyData   = await serviceGetCompany(companyId);
  const dashboardView = await serviceDashboardViewGetCardsBySheetId(companyId, sheetId);

  ctx.body = {
    userData, companyData, dashboardView
  };
}
