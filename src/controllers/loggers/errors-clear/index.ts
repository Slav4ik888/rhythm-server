import { Next } from 'koa';
import { Context } from '../../../app/types/global';
import { createLogTemp, loggerServer as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function logsErrorsClearController(ctx: Context, next: Next): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'logsErrorsClear'),
    error   = responseError(ctx, logger, logTemp);

  try {
    await models.logs.errorsClear(ctx, next);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
