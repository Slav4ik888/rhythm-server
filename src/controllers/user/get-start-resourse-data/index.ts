import { Context } from '../../../app/types/global';
import { createLogTemp, loggerLogin as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function getStartResourseDataController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getStartResourseData'),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.user.getStartResourseData(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
