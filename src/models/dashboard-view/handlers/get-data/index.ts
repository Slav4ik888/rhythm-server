import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { NO_SHEET_ID } from '../../consts';
import { serviceDashboardViewGetViewsBySheetId } from '../../services';
import { ViewItem } from '../../types';



/** 2025-06-13 */
interface ResGetData {
  dashboardView: ViewItem[]
}

interface ReqGetViewItems {
  sheetId?  : string
  companyId : string
}

/**
 * Get all ViewItemsByCompanyId
 *
 * @requires body.ReqGetViewItems
 */
export async function getDataModel(ctx: Context): Promise<any> {
  const { id } = ctx.state.user;
  const { sheetId = NO_SHEET_ID, companyId } = ctx.request.body as ReqGetViewItems;

  if (! companyId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA, 'companyId') })

  // TODO: Check доступ к переданной companyId

  const dashboardView = await serviceDashboardViewGetViewsBySheetId(companyId, sheetId);

  ctx.body = {
    dashboardView
  };
}
