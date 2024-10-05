import { User } from '../../../../models/users';
import { client } from '../../init';



/** Set cookie & user to Redis */
export const redisSet = async (
  userId        : string,
  sessionCookie : string,
  user          : User
): Promise<void> => {

  await client.hSet(userId, {
    cookie : sessionCookie,
    user   : JSON.stringify(user)
  });
}
