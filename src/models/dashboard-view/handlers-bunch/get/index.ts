import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { NO_SHEET_ID } from '../../consts';
import { serviceGetDashboardBunches } from '../../services';
import { Bunch, ViewItem } from '../../types';



/** 2025-06-23 */
interface ResGetBunches {
  viewItems : ViewItem[]
}

interface ReqGetBunches {
  companyId : string
  bunchIds  : string[] // То что надо загрузить
}

/**
 * Get all BunchsByCompanyId
 * @requires body.ReqGetBunchs
 */
export async function getBunchesModel(ctx: Context): Promise<any> {
  const { companyId, bunchIds } = ctx.request.body as ReqGetBunches;

  if (! companyId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA, 'companyId') })

  // TODO: Check доступ к переданной companyId

  const viewItems = await serviceGetDashboardBunches(companyId, bunchIds);

  ctx.body = {
    viewItems
  };
}
