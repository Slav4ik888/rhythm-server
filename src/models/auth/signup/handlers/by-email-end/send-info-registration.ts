import { createLogTemp, loggerMail as logger } from '../../../../../libs/loggers';
import { sendMail } from '../../../../../libs/emails';
import { Context } from '../../../../../app/types/global';
import { cfg } from '../../../../../app/config';


export async function sendInfoRegistration(ctx: Context, name: string = ''): Promise<any> {
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

  logger.info(`${logTemp} successfully!`);
};
