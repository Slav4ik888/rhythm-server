import { GOOGLE_USERS_STORAGE_START_PATH } from '../../config';

/**
 * @param link - 'https://firebasestorage.googleapis.com/v0/b/company-rules-users/o/fqzrbxrjPgQ12xoDHbZW%2Frule_image%2FgcJ0GvAEBnBO0g7diaaV%2Fv6x2l4m4g217ffw4cfqy.jpg?alt=media&token=5949e815-65b0-40b8-9e4d-04228c54ba60'
 * @returns ${companyId}/rule_image/${ruleId}/${filename}  example - fqzrbxrjPgQ12xoDHbZW/rule_image/gcJ0GvAEBnBO0g7diaaV/v6x2l4m4g217ffw4cfqy.jpg
 */
export const getPathFromLink = (link: string): string | undefined => {
  if (! link) return undefined
  
  return link
    .slice(GOOGLE_USERS_STORAGE_START_PATH.length + 1)
    .split('?')[0]
    .split('%2F')
    .join('/');
}
  