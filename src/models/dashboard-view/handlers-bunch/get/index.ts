import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { serviceGetCompany } from '../../../company';
// import { NO_SHEET_ID } from '../../consts';
import { serviceGetDashboardViewItems } from '../../services';
import { ViewItem } from '../../types';



/** 2025-06-23 */
interface ResGetBunches {
  viewItems : ViewItem[]
}

interface ReqGetBunches {
  companyId       : string
  bunchIds        : string[] // То что надо загрузить
  dashboardPageId : string | undefined
}

/**
 * Get all BunchsByCompanyId
 * @requires body.ReqGetBunchs
 */
export async function getBunchesModel(ctx: Context): Promise<any> {
  const { companyId, bunchIds, dashboardPageId } = ctx.request.body as ReqGetBunches;

  if (! companyId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA, 'companyId') })

  const company = await serviceGetCompany(companyId);

  // TODO: Check доступ к переданной companyId (для авторизованных)

  // Check доступ (для неавторизованных)
  if (! company?.dashboardPublicAccess?.[dashboardPageId]) {
    // Нет публичного доступа
  }

  const viewItems = await serviceGetDashboardViewItems(companyId, bunchIds);

  ctx.body = {
    viewItems
  };
}
