import { User } from '../../../../models/user';
import { redisGetSession } from '../get-session';



/** Get user from Redis */
export const redisGetUser = async (userId: string): Promise<User | undefined> => {
  const data = await redisGetSession(userId);

  return data?.user
}
