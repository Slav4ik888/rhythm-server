import { SignupData } from '../../../../models';
import { client } from '../../init';



/** Set code & SignupData to Redis */
export const redisSetSignup = async (
  email      : string,
  signupData : SignupData,
  code       : string,
): Promise<void> => {

  await client.hSet(email, {
    code,
    signupData : JSON.stringify(signupData),
    expired    : Date.now() + 1000 * 60 * 5, // 5 minutes
  });
}
