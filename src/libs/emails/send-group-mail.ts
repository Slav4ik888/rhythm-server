import { createLogTemp, loggerMail as logger } from '../loggers';
import { sendMail } from './send-mail';
import { SendEmailOptions } from './types';



/** Отправляет групповую рассылку по списку адресов */
export async function sendGroupMail(
  config   : SendEmailOptions,
  mailList : string[],
  email    : string // Sender email
) {
  const
    { subject, locals, template } = config,
    logTemp = createLogTemp(email, 'sendGroupMail');

  try {
    for (let to of mailList) {
      await sendMail({ to, subject, locals, template });
    }
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    logger.error(err);
  }
}
