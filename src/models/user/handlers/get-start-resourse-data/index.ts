import { Context } from '../../../../app/types/global';
import { Company, serviceGetCompany } from '../../../company';
import { serviceGetUser } from '../../services';
import { User } from '../../types';



/** 2024-03-06 */
interface ResGetStartResourseData {
  userData    : User
  companyData : Company
  documents   : Document[]
}


/**
 * 
 * @requires body.activeFolder 
 */
export async function getStartResourseDataModel(ctx: Context): Promise<any> {
  const { id, companyId } = ctx.state.user;
  // const activeFolderId = ctx.request.body.activeFolder?.id || '';

  // Get folders
  ctx.state.return = true;

  const userData    = await serviceGetUser(companyId, id);
  const companyData = await serviceGetCompany(companyId);

  // TODO: get documents & rulesTitles by activeFolder.id

  ctx.body = {
    userData, companyData
  };
}
