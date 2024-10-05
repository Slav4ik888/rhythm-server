import { DbRef, getRefDoc } from '../../../helpers';


/** Delete user & account data */
export async function deleteUserData(companyId: string, userId: string): Promise<void> {
  if (! companyId || ! userId) return;
  
  // TODO: Verification Owner | User | SuperAdmin
  
  await getRefDoc(DbRef.USER, { companyId, userId }).delete();
  console.log(`deleteUserData: ${userId} successfully!`);
}
