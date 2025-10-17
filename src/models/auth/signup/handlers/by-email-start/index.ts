import { validateSignupData } from '../../validators';
import { checkIsNotFreeEmail } from '../../../utils';
import { Context } from '../../../../../app/types/global';
import { signupSendCodeModel } from './send-code';
import { SignupData } from '../../types';
import { serviceIncreaseRegisterStarted } from '../../../../partner';
import { sendNotifications } from './send-notifications';



export async function signupByEmailStartModel(ctx: Context): Promise<any> {
  const { signupData } = ctx.request.body as { signupData: SignupData };
  const { email, partnerId } = signupData;

  validateSignupData(ctx, signupData);
  await checkIsNotFreeEmail(ctx, email);
  await signupSendCodeModel(ctx);
  await serviceIncreaseRegisterStarted(ctx);
  await sendNotifications(partnerId, email);
}
