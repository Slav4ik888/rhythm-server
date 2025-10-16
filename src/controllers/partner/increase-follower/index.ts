import { Context } from '../../../app/types/global';
import { createLogTemp, loggerUser as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function increaseFollowerController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'partner/increaseFollower'),
    error   = responseError(ctx, logger, logTemp);

  try {
    await models.partner.increaseFollower(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
