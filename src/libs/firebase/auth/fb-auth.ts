import { Next } from 'koa';
import { admin } from '../config/admin-sdk';
import { getErrorMessage, NotAutorized, ERR_CODE } from '../../../views';
import { createLogTemp, loggerAuth } from '../../loggers';
import models from '../../../models';
import { Context } from '../../../app/types/global';
import { getSessionData } from './get-session-data';
import { redisSetSession } from '../../redis';



export async function fbAuthCookie(ctx: Context, next: Next) {

  try {
    const { cookie } = getSessionData(ctx);

    // Verify the session cookie. In this case an additional check is added to detect
    // if the user's Firebase session was revoked, user deleted/disabled, etc.

    if (! cookie) throw new NotAutorized(getErrorMessage(ERR_CODE.CookieNotAuth));

    const decodedIdToken = await admin.auth().verifySessionCookie(cookie, true /** checkRevoked */);
    const user = await models.user.serviceFindUserById(decodedIdToken.uid);

    ctx.state.user = { ...user };
    loggerAuth.info(createLogTemp(ctx, 'FBAuth'));

    redisSetSession(decodedIdToken.uid, cookie, user);
    return next();
  }
  catch(err) {
    // 'auth/id-token-expired'
    loggerAuth.error(`[FBAuth] - oшибка в верификации sessionCookie: ${err}`);

    ctx.status = 401;
    ctx.body = { err };
  };
};
