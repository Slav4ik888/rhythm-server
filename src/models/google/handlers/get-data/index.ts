import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { serviceGetCompany } from '../../../company';
import { serviceGoogleGetData } from '../../services';


/**
 * @requires body.companyId
 */
export const googleGetDataModel = async (ctx: Context): Promise<any> => {
  const { companyId } = ctx.request.body;

  if (! companyId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA, 'companyId') })

  // TODO: Check permissons for companyId

  const company = await serviceGetCompany(companyId);
  if (! company?.googleData?.url) return ctx.throw(400, { general: 'В данных по компании отсутствует url для Google Data' })

  const data = await serviceGoogleGetData(company?.googleData?.url);

  ctx.body = data;
};
