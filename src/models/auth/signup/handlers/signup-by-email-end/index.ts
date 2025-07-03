import { setCookie } from '../../../../../libs/firebase';
import { createNewCompany, createNewUser, complectionUser } from '../../services';
import { validateSignupData } from '../../validators';
import { checkIsNotFreeEmail } from '../../../utils';
import { Context } from '../../../../../app/types/global';
import { sendEmailConfirmation } from './send-email-confirmation';
import { redisGetSignup } from '../../../../../libs/redis';



export async function signupByEmailEndModel(ctx: Context): Promise<any> {

  // Получить данные (код и signupData) с Redis
  const { code, signupData, expired } = await redisGetSignup(email);

  // Проверить expired
  if (Date.now() > expired) return ctx.throw(400, { email: 'Время действия кода истекло, запросите код ещё раз' });
  // Проверить корректность кода

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
