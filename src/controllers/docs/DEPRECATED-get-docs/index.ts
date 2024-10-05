import { Context } from '../../../app/types/global';
import { createLogTemp, loggerFolders as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function getDocsController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getDocs'),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.docs.getDocs(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
