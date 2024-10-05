import { Context } from '../../../app/types/global';
import { createLogTemp, loggerRules as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function getRuleByIdController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getRuleById', ctx.params.ruleId),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.rules.getRuleById(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
