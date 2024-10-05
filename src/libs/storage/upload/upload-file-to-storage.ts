import { UploadOptions } from '@google-cloud/storage';
import { PersistentFileType } from '../../../models/files';
import { USERS_BUCKET_NAME, storage } from '../config';



/**
 * Загружаем файл в Storage
 */
export async function uploadFileToStorage(
  file        : PersistentFileType,            
  destination : string,
  token       : string
): Promise<any> {
  
  const options: UploadOptions = {
    resumable: false,
    destination,
    metadata: {
      metadata: {
        contentType                   : file.mimetype,
        firebaseStorageDownloadTokens : token // Generate token to be appended to imageUrl
      }
    }
  };

  return await storage.bucket(USERS_BUCKET_NAME).upload(file.filepath, options);
}
