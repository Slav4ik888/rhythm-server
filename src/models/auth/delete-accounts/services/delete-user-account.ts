import { admin } from '../../../../libs/firebase';


/** Delete user & account data */
export async function deleteUserAccount(userId: string): Promise<void> {
  if (! userId) return;
  
  await admin.auth().deleteUser(userId);
  console.log(`deleteUserAccount: ${userId} successfully!`);
}
