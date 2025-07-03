import { SignupData } from '../../../../models';
import { parse } from '../../../../shared/utils/strings';
import { client } from '../../init';



export interface ResRedisGetSignup {
  code       : string
  expired    : number
  signupData : SignupData
}

interface RedisGetSignup {
  code       : string
  expired    : number
  signupData : string
}


/** Get code & signupData from Redis */
export const redisGetSignup = async (email: string): Promise<ResRedisGetSignup> => {
  const data = await client.hGetAll(email) as unknown as RedisGetSignup

  return {
    code       : data.code,
    signupData : parse(data.signupData),
    expired    : data.expired
  }
}
