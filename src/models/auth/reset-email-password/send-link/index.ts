import { cfg } from '../../../../app/config';
import { admin } from '../../../../libs/firebase';
import { sendMail } from '../../../../libs/emails';
import { gtt } from '../../../../shared/translate';
import { Languages } from '../../../users/types';



/** Create & send reset password link */
export const sendLink = async (email: string, l: Languages): Promise<boolean> => {
  const actionCodeSettings = {
    url: process.env.IS_DEV ? process.env.SITE_URL_DEV : cfg.SITE_URL,
    handleCodeInApp: true,
  };

  const link = await admin.auth().generatePasswordResetLink(email, actionCodeSettings);
    
  if (link) await sendMail({
    to       : email,
    subject  : `${gtt[l]['Ссылка для восстановления доступа на сайт']} - "${cfg.SITE_TITLE_FULL}"`,
    template : 'reset-email-password',
    locals   : {
      name: '',
      platform_name : cfg.SITE_TITLE_FULL,
      url_site      : cfg.SITE_URL,
      url_link      : link
    }
  });

  return Boolean(link);
}
