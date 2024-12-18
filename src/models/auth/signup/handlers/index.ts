import { setCookie } from '../../../../libs/firebase';
import { createNewCompany, createNewUser, complectionUser } from '../services';
import { validateSignupData } from '../validators';
import { checkIsNotFreeEmail } from '../../utils';
import { Context } from '../../../../app/types/global';



// TODO: When invite new User нужно разделить создание пользователя с записью в уже имеющуюся компанию

export async function signupByEmailModel(ctx: Context): Promise<any> {
  const { signupData } = ctx.request.body;

  validateSignupData(ctx, signupData);
  
  await checkIsNotFreeEmail(ctx, signupData.email);

  const { newUserData, userCredential } = await createNewUser(signupData);
  const { newCompanyData, companyId } = await createNewCompany(signupData, newUserData.id);

  await complectionUser(newUserData, companyId);
  await setCookie(ctx, userCredential, newUserData, 'signup');
  
  ctx.body = {
    newUserData,
    newCompanyData,
    message: 'Поздравляем с успешной регистрацией!'
  };
}
