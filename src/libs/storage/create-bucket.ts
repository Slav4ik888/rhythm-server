import { storage } from './config';


export async function createBucket(bucketName: string) {
  // Creates the new bucket
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
};
