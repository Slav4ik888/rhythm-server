import { Context } from '../../../app/types/global';
import { createLogTemp, loggerFolders as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function updateFolderController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'updateFolder', ctx.request.body.folder?.id),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.folders.updateFolder(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
