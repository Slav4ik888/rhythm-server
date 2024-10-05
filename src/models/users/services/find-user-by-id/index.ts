import { db } from '../../../../libs/firebase';
import { User } from '../../../users';


export async function serviceFindUserById(userId: string): Promise<User> {
  const snap = await db
    .collectionGroup('users')
    .where('id', '==', userId)
    .limit(1)
    .get();

  return snap.docs?.[0]?.data() as User;
};
