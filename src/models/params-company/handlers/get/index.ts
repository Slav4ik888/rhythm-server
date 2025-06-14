import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { Company, serviceGetCompany } from '../../../company';


/**
 */
export const getParamsCompanyModel = async (ctx: Context): Promise<Company> => {
  const { companyId } = ctx.params;

  if (! companyId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA, 'companyId') })

  // TODO: Получать не целиком данные компании а только для проверки полномочий доступа
  // TODO: Check permissons for companyId

  const company = await serviceGetCompany(companyId);

  if (ctx.state.callback) return company;
  else ctx.body = company;
};
