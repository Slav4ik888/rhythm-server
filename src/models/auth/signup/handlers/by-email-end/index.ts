import { setCookie } from '../../../../../libs/firebase';
import { createNewCompany, createNewUser, complectionUser } from '../../services';
import { checkIsNotFreeEmail } from '../../../utils';
import { Context } from '../../../../../app/types/global';
import { redisGetSignup } from '../../../../../libs/redis';
import { sendInfoRegistration } from './send-info-registration';
import { validateSignupDataEnd } from '../../validators';
import { checkCodeAnswer } from './utils';



export async function signupByEmailEndModel(ctx: Context): Promise<any> {
  const { signupDataEnd } = ctx.request.body;
  const { email, emailCode } = ctx.request.body?.signupDataEnd;

  validateSignupDataEnd(ctx, signupDataEnd);

  const data = await redisGetSignup(email); // Получить данные (код и signupData) с Redis

  await checkCodeAnswer(ctx, data, emailCode);

  const { signupData } = data;
  await checkIsNotFreeEmail(ctx, signupData.email);

  const { newUserData, userCredential } = await createNewUser(signupData);
  const { newCompanyData, companyId } = await createNewCompany(signupData, newUserData.id);

  await complectionUser(newUserData, companyId);
  await setCookie(ctx, userCredential, newUserData, 'signup');
  await sendInfoRegistration(ctx, data.signupData?.firstName);

  ctx.body = {
    newUserData,
    newCompanyData,
    message: 'Поздравляем с успешной регистрацией!'
  };
}
