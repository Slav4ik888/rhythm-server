import { Context } from '../../../app/types/global';
import { createLogTemp, loggerSignup as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function signupByEmailController(ctx: Context): Promise<any> {
  const
    email   = String((ctx?.request?.body?.signupData)?.email),
    logTemp = createLogTemp(ctx, 'signup', email),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.auth.signupByEmail(ctx);
    logger.info(`${logTemp} success`);
    // TODO: send email for confirm email
    // TODO: send email about registration
  }
  catch (err) {
    error(err);
  }
}
