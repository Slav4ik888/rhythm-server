import { Next } from 'koa';
import { Context } from '../../app/types/global';
import { cfg } from '../../app/config';



/** Проверяем версию на клиенте */
export async function cv(ctx: Context, next: Next) {
  const clientVersion = ctx.request.headers['x-client-version'];
  const serverVersion = cfg.VERSION;

  if (clientVersion !== serverVersion) {
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
