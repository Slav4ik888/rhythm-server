import { User } from '../../../../models/users';
import { redisGet } from '../get';



/** Get user from Redis */
export const redisGetUser = async (userId: string): Promise<User | undefined> => {
  const data = await redisGet(userId);

  return data?.user
}
