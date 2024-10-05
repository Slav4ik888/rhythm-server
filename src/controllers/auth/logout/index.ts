import { cfg } from '../../../app/config';
import { Context } from '../../../app/types/global';
import { createLogTemp, loggerLogin as logger } from '../../../libs/loggers';
import { User } from '../../../models/users';
import { responseError } from '../../../views';



/** Logout & clear cookie */
export async function logoutController(ctx: Context): Promise<any> {
  ctx.state.user = {} as User;
  ctx.state.user.email = ctx.params.email;

  const
    logTemp = createLogTemp(ctx, 'logout'),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    logger.info(`${logTemp} вышел`);
    ctx.cookies.set(cfg.COOKIE_NAME, '');
    ctx.redirect('/');
  }
  catch (err) {
    error(err);
  }
}
