import { Next } from 'koa';
import { Context } from '../../../app/types/global';
import { createLogTemp, loggerServer as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function logsErrorsViewController(ctx: Context, next: Next): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'logsErrorsView'),
    error   = responseError(ctx, logger, logTemp);

  try {
    await models.logs.errorsView(ctx, next);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
