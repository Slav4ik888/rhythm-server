import { Next } from 'koa';
import { Context } from '../../app/types/global';
import { cfg } from '../../app/config';
import { createLogTemp, loggerApp as logger, loggerUrl } from '../../libs/loggers';
import { getSessionData } from '../../libs/firebase';
// import { ERR_CODE, getErrorMessage, NotAutorized } from '../../views';


/** Проверяем версию на клиенте */
export async function cv(ctx: Context, next: Next) {
  // Лог загрузки страницы
  if ([
    '/api/user/getAuth',
    '/api/paramsCompany/get'
  ].includes(ctx.path)) {

    const { userId } = getSessionData(ctx);

    if (! ['pT5sk0UDkzgVGXtCRLjk72h4jwV2'].includes(userId)) {
      const user = userId ? userId : 'quest';

      const { companyId } = ctx.request.body;
      const ci = companyId ? `[ci]: ${companyId}` : '';

      loggerUrl.info(`[r]: ${ctx.request.url} ${ci} [u]: ${user} [ref]: ${ctx.get('Referer')}`);
    }
  }
  // -------

  const clientVersion = ctx.request.headers['x-client-version'];
  const serverVersion = cfg.VERSION;

  // For dev testing
  // throw new NotAutorized(getErrorMessage(ERR_CODE.CookieNotAuth))

  if (clientVersion !== serverVersion) {
    logger.error(createLogTemp(ctx, 'cv'));

    ctx.status = 409; // Conflict
    ctx.body = {
      error: 'Version mismatch',
      clientVersion,
      serverVersion,
      updateRequired: true
    };

    return
  }

  // Продолжаем обработку, если версии совпадают
  return next();
}
