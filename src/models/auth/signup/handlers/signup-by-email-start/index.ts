import { validateSignupData } from '../../validators';
import { checkIsNotFreeEmail } from '../../../utils';
import { Context } from '../../../../../app/types/global';
import { sendEmailCodeConfirmation } from './send-email-code-confirmation';
import { generateCheckCode } from './utils/generate-check-code';
import { redisGetSignup, redisSetSignup } from '../../../../../libs/redis';



export async function signupByEmailStartModel(ctx: Context): Promise<any> {
  const { signupData } = ctx.request.body;
  const { email } = signupData;

  console.log('signupData: ', signupData);

  validateSignupData(ctx, signupData);

  await checkIsNotFreeEmail(ctx, email);

  // Сделать код
  const code = generateCheckCode();
  console.log('code: ', code);

  // Сохранить данные (код и signupData) в Redis
  await redisSetSignup(email, signupData, code);
  const red = await redisGetSignup(email);
  console.log('red: ', red);

  await sendEmailCodeConfirmation(ctx);

  ctx.body = {
    message: `На указанную  почту [${email}] отправлен код подтверждения`
  };
}
