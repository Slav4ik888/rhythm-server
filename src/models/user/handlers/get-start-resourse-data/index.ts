import { Context } from '../../../../app/types/global';
import { Company, serviceGetCompany } from '../../../company';
import { NO_SHEET_ID } from '../../../dashboard/consts';
import { serviceDashboardViewGetCardsBySheetId } from '../../../dashboard/services';
import { CardItem } from '../../../dashboard/types';
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
  console.log('[ts][getStartResourseDataModel][start]', new Date().getTime());
  const { id, companyId } = ctx.state.user;
  const { sheetId = NO_SHEET_ID } = ctx.params;


  // Get folders
  // ctx.state.return = true;

  const userData      = await serviceGetUser(companyId, id);
  console.log('[ts][getStartResourseDataModel][userData]', new Date().getTime());
  const companyData   = await serviceGetCompany(companyId);
  console.log('[ts][getStartResourseDataModel][companyData]', new Date().getTime());
  const dashboardView = await serviceDashboardViewGetCardsBySheetId(companyId, sheetId);
  console.log('[ts][getStartResourseDataModel][dashboardView]', new Date().getTime());

  ctx.body = {
    userData, companyData, dashboardView
  };
}
