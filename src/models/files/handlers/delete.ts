import { getPathFromLink, deleteFileFromStorage } from '../../../libs/storage';
import { createLogTemp, loggerDeleteFiles as logger } from '../../../libs/loggers';
import { Context } from '../../../app/types/global';



/**
 * Delete files from the storage by link
 */
export const deleteFilesModel = async (ctx: Context, deletedLinks: string[]): Promise<void> => {

  if (! deletedLinks || ! deletedLinks.length) return
  
  const logTemp = createLogTemp(ctx, 'delete files');

  // I did not check permissions, since the user firstly must initially have them to update the rules

  for await (let link of deletedLinks) {
    const path = getPathFromLink(link);
    if (path) {
      await deleteFileFromStorage(path);
    logger.info(`${logTemp} - file: ${path} success!`);
    }
  }
};
