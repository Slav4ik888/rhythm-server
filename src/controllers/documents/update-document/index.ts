import { Context } from '../../../app/types/global';
import { createLogTemp, loggerDocuments as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function updateDocumentController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'updateDocument', ctx.request.body.updatedDocument?.id),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.documents.updateDocument(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
