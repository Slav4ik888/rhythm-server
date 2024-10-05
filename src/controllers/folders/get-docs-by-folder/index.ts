import { Context } from '../../../app/types/global';
import { createLogTemp, loggerFolders as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function getDocsByFolderController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getDocsByFolder', ctx.params.folderId),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.folders.getDocsByFolder(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
