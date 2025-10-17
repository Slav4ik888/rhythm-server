import { createLogTemp, loggerMail as logger } from '../../../../../../libs/loggers';
import { sendMail } from '../../../../../../libs/emails';
import { Context } from '../../../../../../app/types/global';
import { cfg } from '../../../../../../app/config';



/**
 * Отправляем Code для подтверждения почты
 */
export async function sendEmailCodeConfirmation(ctx: Context, code: string): Promise<any> {
  const email   = String((ctx.request.body.signupData)?.email);
  const logTemp = createLogTemp(ctx, 'signupSendEmailCode', email);

  // const actionCodeSettings = {
  //   handleCodeInApp: true,
  //   url: cfg.SITE_URL,
  // };

  // const link = await admin.auth().generateEmailVerificationLink(email, actionCodeSettings);

  await sendMail({
    to       : email,
    subject  : `Подтвердите эл.почту для доступа в "${cfg.SITE_TITLE_FULL}"`,
    template : 'confirmation',
    locals   : {
      code,
      name          : String((ctx.request.body.signupData)?.firstName) || '',
      platform_name : cfg.SITE_TITLE_FULL,
      url_site      : cfg.SITE_URL,
    }
  });

  await sendMail({
    to       : cfg.INFO_EMAIL,
    subject  : `Попытка участника Ритма: ${email}`,
    template : 'info-attempt-registration',
    locals: {
      platform_name: cfg.SITE_TITLE_FULL,
      email
    },
  });

  logger.info(`${logTemp} successfully!`);
};
