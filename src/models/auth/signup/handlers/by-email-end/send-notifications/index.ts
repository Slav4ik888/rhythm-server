import { cfg } from '../../../../../../app/config';
import { sendMail } from '../../../../../../libs/emails';
import { createLogTemp, loggerMail as logger } from '../../../../../../libs/loggers';
import { Context } from '../../../../../../app/types/global';



/**
 * Отправка уведомлений об успешной регистрации пользователя
 */
export const sendNotifications = async (ctx: Context, name: string = '', partnerId: string): Promise<void> => {
  const email   = String((ctx?.request?.body?.signupDataEnd)?.email);
  const logTemp = createLogTemp(ctx, 'signup info-registration', email);

  await sendMail({
    to       : cfg.INFO_EMAIL,
    subject  : `Новый участник Rhythm: ${email}`,
    template : 'info-registration',
    locals: {
      platform_name: cfg.SITE_TITLE_FULL,
      name,
      email
    },
  });

  if (! partnerId) return

  await sendMail({
    to       : cfg.INFO_EMAIL,
    subject  : `Успешная регистрация по партнёрской ссылке: ${partnerId}`,
    template : 'info-partner-registration-ended',
    locals: {
      platform_name : cfg.SITE_TITLE_FULL,
      url_site      : cfg.SITE_URL,
      partnerId,
      email
    },
  });

  logger.info(`${logTemp} successfully!`);
};
