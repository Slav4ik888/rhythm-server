import { Context } from '../../../../app/types/global';
import { getUserId } from '../../../users';
import { serviceUpdateCompany } from '../../services';
import { Company } from '../../types';



export interface UpdatedConfig {
  companyData: Partial<Company>
}


/**
 * @requires body as UpdatedConfig
 */
export const updateCompanyModel = async (ctx: Context): Promise<void> => {
  const { companyData } = ctx.request.body;
  const userId = getUserId(ctx);

  // TODO: Permissions
  
  // TODO: validateCompany(ctx, companyData);

  // Update
  await serviceUpdateCompany(companyData, userId);

  ctx.status = 200;
};
