import { Context } from '../../../app/types/global';
import { createLogTemp, loggerDocuments as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function addDocumentController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'addDocument'),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.documents.addDocument(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
