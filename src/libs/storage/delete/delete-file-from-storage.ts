import { USERS_BUCKET_NAME, storage } from '../config';



/**
 * Delete file from Storage in USERS_BUCKET_NAME
 */
export const deleteFileFromStorage = async (filePath: string): Promise<any>  => {
  return await storage
    .bucket(USERS_BUCKET_NAME)
    .file(filePath)
    .delete({ ignoreNotFound: true });
}
