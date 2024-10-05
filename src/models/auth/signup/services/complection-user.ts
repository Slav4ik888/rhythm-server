import { DbRef, getRefDoc } from '../../../helpers';
import { User } from '../../../users';



/** Add companyId in User & set to DB */
export async function complectionUser(newUserData: User, companyId: string): Promise<any> {
  const userId = newUserData.id;
  
  newUserData.companyId = companyId;

  await getRefDoc(DbRef.USER, { companyId, userId }).set(newUserData);
}
