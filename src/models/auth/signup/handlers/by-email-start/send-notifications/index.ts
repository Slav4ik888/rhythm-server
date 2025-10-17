import { cfg } from '../../../../../../app/config';
import { sendMail } from '../../../../../../libs/emails';



/**
 * Отправка уведомлений о попытке регистрации пользователя по партнёрской ссылке
 */
export const sendNotifications = async (partnerId: string, email: string): Promise<void> => {
  await sendMail({
    to       : cfg.INFO_EMAIL,
    subject  : `Начало регистрации по партнёрской ссылке: ${partnerId}`,
    template : 'info-partner-registration-started',
    locals: {
      platform_name : cfg.SITE_TITLE_FULL,
      url_site      : cfg.SITE_URL,
      partnerId,
      email
    },
  });
};
