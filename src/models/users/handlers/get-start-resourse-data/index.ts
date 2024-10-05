import { Context } from '../../../../app/types/global';
import { Company, serviceGetCompany } from '../../../companies';
import { serviceGetDocuments } from '../../../documents';
import { serviceGetFolders, serviceGetBreadcrumbs, Folder } from '../../../folders';
import { serviceGetUser } from '../../services';
import { User } from '../../types';



/** 2024-03-06 */
interface ResGetStartResourseData {
  userData    : User
  companyData : Company
  folders     : Folder[]
  breadcrumbs : Folder[]
  documents   : Document[]
}


/**
 * 
 * @requires body.activeFolder 
 */
export async function getStartResourseDataModel(ctx: Context): Promise<any> {
  const
    { id, companyId } = ctx.state.user,
    activeFolderId = ctx.request.body.activeFolder?.id || '';

  // Get folders
  ctx.state.return = true;

  // TODO: get folders only Condition !== REMOVED
  
  const
    userData    = await serviceGetUser(companyId, id),
    companyData = await serviceGetCompany(companyId),
    folders     = await serviceGetFolders(companyId, activeFolderId),
    breadcrumbs = await serviceGetBreadcrumbs(companyId, activeFolderId),
    documents   = await serviceGetDocuments(companyId, activeFolderId);

  // TODO: get documents & rulesTitles by activeFolder.id

  ctx.body = {
    userData, companyData, folders, breadcrumbs, documents
  };
}
