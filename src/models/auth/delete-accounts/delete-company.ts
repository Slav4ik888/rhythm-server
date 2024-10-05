import { Context } from '../../../app/types/global';
import { checkPermissions } from '../../../libs/permissions/check-permissions';
import { ERR_CODE, getErrorMessage } from '../../../views';
import { getCompany } from '../../companies';
import { serviceFindUserByEmail } from '../../users';
import { deleteCompanyData, deleteUserAccount, deleteUserData } from './services';
import { validateDeleteCompanyData } from './validators';


/**
 * Удаление пользователя
 * 
 *  - email from authenticated
 *  - userData
 *  - if owner => all users & all usersData & companyData
 */
export async function deleteCompanyAccount(ctx: Context, email: string): Promise<any> {
  const user = ctx.state.user;
  console.log('user', user);

  validateDeleteCompanyData(ctx, email);

  const targetUser = await serviceFindUserByEmail(email);
  console.log('targetUser: ', targetUser);
  if (! targetUser) ctx.throw(400, { general: getErrorMessage(ERR_CODE.UnknownUserEmail) });
  
  ctx.request.body.companyId = targetUser.companyId;
  ctx.state.callback = true;
  const targetCompany = await getCompany(ctx);
  console.log('targetCompany: ', targetCompany);

  checkPermissions(ctx, 'companyAccount.delete', user, targetCompany, targetUser);


  // TODO: If Owner - delete all users & them data, then delete Owner user & Company

  await deleteUserAccount(user.id);
  await deleteUserData(user.companyId, user.id);
  // await models.auth.deleteUser(ctx, error);
  // await models.auth.deleteIdentifier(ctx, error);
  await deleteCompanyData(user.companyId);
}
