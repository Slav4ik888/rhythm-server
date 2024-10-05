import { Context } from '../../../app/types/global';
import { createLogTemp, loggerAuth as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



/**
 * Удаление пользователя
 * 
 *  - email from authenticated
 *  - userData
 *  - if owner => all users & all usersData & companyData
 */
export async function deleteCompanyAccount(ctx: Context): Promise<any> {
  const
    email   = ctx.request.body.email,
    logTemp = createLogTemp(ctx, 'deleteCompanyAccount', email),
    error   = responseError(ctx, logger, logTemp);
    
  try {
    logger.info(`${logTemp} ${email} start...`);
    
    await models.auth.deleteCompanyAccount(ctx, email);

    ctx.body = { message: 'deleteCompanyAccount successfully!' };
    logger.info(`${logTemp} ${email} successfully!`);
  }
  catch (err) {
    error(err);
  }
}
