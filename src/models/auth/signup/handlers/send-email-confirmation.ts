import { createLogTemp, loggerMail as logger } from '../../../../libs/loggers';
import { sendMail, SendEmailOptions } from '../../../../libs/emails';
import { Context } from '../../../../app/types/global';
import { admin } from '../../../../libs/firebase';
import { cfg } from '../../../../app/config';



/**
 * Отправляем ссылку для подтверждения почты
 */
export async function sendEmailConfirmation(ctx: Context): Promise<any> {
  const
    email   = String((ctx?.request?.body?.signupData)?.email),
    logTemp = createLogTemp(ctx, 'signup', email);

  logger.info(`${logTemp} confirmation`);

  const actionCodeSettings = {
    handleCodeInApp: true,
    url: cfg.SITE_URL,
  };

  const link = await admin.auth().generateEmailVerificationLink(email, actionCodeSettings);

  await sendMail({
    to       : email,
    subject  : `Подтвердите эл.почту для доступа в "${cfg.SITE_TITLE_FULL}"`,
    template : 'confirmation',
    locals   : {
      name             : '',
      url_confirmation : link,
      platform_name    : cfg.SITE_TITLE_FULL,
      url_site         : cfg.SITE_URL,
    }
  });

  await sendMail({
    to       : cfg.INFO_EMAIL,
    subject  : `Новый участник Rhythm: ${email}`,
    template : 'info-registration',
    locals: {
      platform_name: cfg.SITE_TITLE_FULL,
      email
    },
  });

  logger.info(`${logTemp} successfully!`);
};
