import { Context } from '../../../app/types/global';
import { createLogTemp, loggerDocuments as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';



export async function getDocumentByIdController(ctx: Context): Promise<any> {
  const
    logTemp = createLogTemp(ctx, 'getDocumentById', ctx.params.documentId),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.documents.getDocumentById(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
