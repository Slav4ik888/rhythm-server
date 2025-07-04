import { UserCredential } from 'firebase/auth';
import { cfg } from '../../../../app/config';
import { Context } from '../../../../app/types/global';
import { User } from '../../../../models/user';
import { day } from '../../../../shared/utils/dates';
import { admin } from '../../config/admin-sdk';
import { checkCsrfToken } from '../check-csrf-token';
import { redisSetSession } from '../../../redis';



/** Create token & sessionCookie */
export async function setCookie(
  ctx            : Context,
  userCredential : UserCredential,
  user           : User,
  logTemp        : string
) {
  checkCsrfToken(ctx);

  const idToken = await userCredential.user.getIdToken();

  // Set session expiration to 12 days.
  const expiresIn = day(12); // 60 * 60 * 24 * 12 * 1000;

  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

  // Set cookie policy for session cookie.
  // ADD secure: true, когда будет https
  const sessionOptions = {
    maxAge   : expiresIn,
    httpOnly : true,
    path     : '/'
  };

  const userId = userCredential.user.uid;

  // Set to Redis
  redisSetSession(userId, sessionCookie, user);

  // Add UserId
  const cookie = userId + '/' + sessionCookie;

  ctx.cookies.set(cfg.COOKIE_NAME, cookie, sessionOptions);
}
