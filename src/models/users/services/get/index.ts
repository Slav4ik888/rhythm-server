import { User } from '../..';
import { DbRef, getRefDoc } from '../../../helpers';


export async function serviceGetUser(companyId: string, userId: string): Promise<User> {
  const docUser = await getRefDoc(DbRef.USER, { companyId, userId }).get();

  if (docUser.exists) return docUser.data() as User;
  return undefined;
};
