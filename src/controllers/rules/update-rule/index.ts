import { Context } from '../../../app/types/global';
import { createLogTemp, loggerRules as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function updateRuleController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'updateRule', ctx.request.body.updatedRule?.id),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.rules.updateRule(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
