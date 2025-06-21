import { setCookie } from '../../../../libs/firebase';
import { createNewCompany, createNewUser, complectionUser } from '../services';
import { validateSignupData } from '../validators';
import { checkIsNotFreeEmail } from '../../utils';
import { Context } from '../../../../app/types/global';
import { sendEmailConfirmation } from './send-email-confirmation';



export async function signupByEmailModel(ctx: Context): Promise<any> {
  const { signupData } = ctx.request.body;

  validateSignupData(ctx, signupData);

  await checkIsNotFreeEmail(ctx, signupData.email);

  const { newUserData, userCredential } = await createNewUser(signupData);
  const { newCompanyData, companyId } = await createNewCompany(signupData, newUserData.id);

  await complectionUser(newUserData, companyId);
  await setCookie(ctx, userCredential, newUserData, 'signup');
  await sendEmailConfirmation(ctx);

  ctx.body = {
    newUserData,
    newCompanyData,
    message: 'Поздравляем с успешной регистрацией!'
  };
}
