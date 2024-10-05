import { Storage } from '@google-cloud/storage';
import path from 'path';

// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html


export const USERS_BUCKET_NAME          = 'company-rules-users';
export const GOOGLE_STORAGE_START_PATH  = 'https://firebasestorage.googleapis.com/v0/b';
export const GOOGLE_STORAGE_PATH_PREFIX = 'o';
export const GOOGLE_USERS_STORAGE_START_PATH =
  GOOGLE_STORAGE_START_PATH + '/' +
  USERS_BUCKET_NAME + '/' +
  GOOGLE_STORAGE_PATH_PREFIX;


const GOOGLE_APPLICATION_CREDENTIALS = path.join(__dirname, '/private/storage-key.json');


export const storage = new Storage({
  projectId   : 'company-rules-888',
  keyFilename : GOOGLE_APPLICATION_CREDENTIALS
});
