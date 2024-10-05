import { Context } from '../../../app/types/global';
import { v4 as uuidv4 } from 'uuid';
import { getPathDestionation, uploadFileToStorage, getUploadLink } from '../../../libs/storage';
import { loggerUploadFiles as logger } from '../../../libs/loggers';
import { OperationType } from '../../../libs/permissions/check-permissions';
import { getTempFilename } from '../../../shared/utils/files';



// PersistentFile {
//   _events: [Object: null prototype],
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   lastModifiedDate: 2024-01-12T11:46:37.978Z,
//   filepath: '/var/folders/zv/zbjg1qw932v_n1gk96z372n80000gp/T/a7358088a3d582a87f81bff02',
//   newFilename: 'a7358088a3d582a87f81bff02',
//   originalFilename: '323181713.jpg',
//   mimetype: 'image/jpeg',
//   hashAlgorithm: false,
//   size: 105337,
//   _writeStream: [WriteStream],
//   hash: null,
//   [Symbol(kCapture)]: false
// },


/**
 * Upload files to the storage by operation - FileOperationType
 */
export const uploadFilesModel = async (ctx: Context, logTemp: string): Promise<void> => {
  const
    { files, operation, id } = ctx.state,
    { companyId } = ctx.state.user;

  // TODO: Validate

  // TODO: Permissions

  const urls = []; // Result image links

  // Upload to Storage
  for await (let file of files) {
    const
      token       = uuidv4(), // Токен для доступа к файлу
      filename    = getTempFilename(file.originalFilename, 20),
      destination = getPathDestionation(ctx, filename);
    
    await uploadFileToStorage(file, destination, token);

    const url = getUploadLink(companyId, operation as unknown as OperationType, id, filename, token);
    urls.push(url);
    logger.info(`${logTemp} - filename: ${file.originalFilename} success!`);
  }

  ctx.body = { urls };
};
