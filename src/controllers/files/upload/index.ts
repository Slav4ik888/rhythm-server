import { Context } from '../../../app/types/global';
import { createLogTemp, loggerUploadFiles as logger } from '../../../libs/loggers';
import models from '../../../models';
import { responseError } from '../../../views';
import { formidable } from 'formidable';
import { cfg } from '../../../app/config';
import { getPathDestionation } from '../../../libs/storage';



/**
 * Upload files to the storage from FormData
 * @requires req.files
 */
export async function uploadFilesController(ctx: Context): Promise<any> {
  let
    logTemp = createLogTemp(ctx, 'uploadFiles'),
    error = responseError(ctx, logger, logTemp);
  
  try {
    const form = formidable({
      maxFileSize      : cfg.UPLOAD.MAX_FILE_SIZE,
      maxTotalFileSize : cfg.UPLOAD.MAX_TOTAL_FILE_SIZE
    });

    // @ts-ignore
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        resolve({ fields, files });
      });
    });

    ctx.state = {
      ...ctx.state,
      operation : fields?.operation?.[0],
      id        : fields?.id?.[0],
      parentId  : fields?.parentId?.[0],
      files     : files?.file
    };

    logTemp = logTemp + getPathDestionation(ctx, '-');
    error = responseError(ctx, logger, logTemp);

    await models.files.upload(ctx, logTemp);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
