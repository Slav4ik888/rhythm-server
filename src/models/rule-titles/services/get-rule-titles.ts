import { DbRef, getRefCol } from '../../helpers';


/**
 * Get all ruleTitles that are in this folder
*/
export async function serviceGetRuleTitles(companyId: string, parentId: string = '') {
  const ruleTitles  = [];
  
  const ruleTitlesRes = await getRefCol(DbRef.RULE_TITLES, { companyId, parentId }).get();

  if (! ruleTitlesRes?.empty) ruleTitlesRes.forEach(f => ruleTitles.push(f.data()))

  return ruleTitles;
}
