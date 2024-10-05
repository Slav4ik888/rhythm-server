import { Context } from '../../../app/types/global';
import { validateResetEmailPassword } from './validators';
import { getLanguage, gtt } from '../../../shared/translate';
import { checkUser } from './check-user';
import { sendLink } from './send-link';



export async function resetEmailPasswordModel(ctx: Context): Promise<any> {
  const
    email = ctx.request.body.email,
    l = getLanguage(ctx);

  validateResetEmailPassword(ctx, email);
  checkUser(ctx, email, l);
  
  const result = await sendLink(email, l);

  ctx.status = result ? 200 : 400;
  ctx.body = {
    message: result
      ? `${gtt[l]['Ссылка для восстановления пароля отправлена на почту']}: ${email}`
      : `${gtt[l]['Произошла ошибка, не получилось отправить ссылку, на указанную почту']}: ${email}`
  }
}
