import { Context } from '../../../app/types/global';
import { Company } from '../../../models/companies';
import { Role, User } from '../../../models/users';
import { ERROR_NAME, getErrorText } from '../../validators';
import { isNotRoleOwner } from '../is-role';


type ReqUser = {
  id        : string
  companyId : string
  role      : Role
}

/** Типы событий */
export enum PermissionEventType {
  COMPANY_ACCOUNT = 'companyAccount',

  // AUTH    = 'auth', // всё что с доступом к аккаунту (not Profile): create users | change they | delete they
  // COMPANY = 'company',
  // USER    = 'user'
}


/** Operation type */
export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update', // Change | Rename
  DELETE = 'delete'
}
// Доступ на удаление аккаунта 'deleteAccount' => auth.delete
// auth.delete - удаление аккаунта

/**
 * Check permissions by scheme
 * @param scheme  - 'PermissionEventType.OperationType.additionParameters' => 'auth.delete' | 'auth.change.fieldName'
 * @param reqUser - who send request
 * @param targetCompany
 * @param targetUser 
 */
export const checkPermissions = (
  ctx            : Context,
  scheme         : string,
  reqUser        : ReqUser,
  targetCompany? : Company,
  targetUser?    : User
): never | boolean => {
    
  if (! scheme) ctx.throw(403, { general: getErrorText(ERROR_NAME.PERMISSONS_UNKNOWN) })
  
  const splitted = scheme.split('.');

  if (splitted[0] === PermissionEventType.COMPANY_ACCOUNT) {
    if (splitted[1] === OperationType.DELETE) {
      if (isNotRoleOwner(reqUser)) ctx.throw(403, { general: getErrorText(ERROR_NAME.PERMISSONS_NOT_ALLOWED) });
      
      // Check чтобы кто запрашивает был владельцем компании
      if (reqUser.companyId !== targetCompany?.id || reqUser.id !== targetCompany?.ownerId) ctx.throw(403, { general: getErrorText(ERROR_NAME.PERMISSONS_NOT_ALLOWED) });
    }
  }
  else ctx.throw(403, { general: getErrorText(ERROR_NAME.PERMISSONS_UNKNOWN) })

  return true
};
