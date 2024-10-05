import { Context } from '../../../app/types/global';
import { createLogTemp, loggerRules as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function addRuleController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'addRule'),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.rules.addRule(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
