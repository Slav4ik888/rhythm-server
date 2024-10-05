import { OperationType } from '../../permissions/check-permissions';
import { GOOGLE_USERS_STORAGE_START_PATH } from '../config';


export const getUploadLink = (
  companyId : string,
  operation : OperationType,
  id        : string,
  filename  : string,
  token     : string
): string => {

  return `${GOOGLE_USERS_STORAGE_START_PATH}/${companyId}%2F${operation}%2F${id}%2F${filename}?alt=media&token=${token}`
}
  