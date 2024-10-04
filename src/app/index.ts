import Koa from 'koa';
import { loggerServer } from '../libs/loggers';
import middleware from '../middleware';
import '../shared/utils/dotenv';


const app = new Koa();
// TODO: app.context.db = db();

app.use(async (ctx, next) => {
  try {
    await next();
  }
  catch (err) {
    loggerServer.error(`[Server]: ${JSON.stringify(err)}`); // (err, null, 2)}`);

    if (err.status) {
      ctx.status = err.status;
      ctx.body   = {error: err.message};
    }
    else {
      console.error(err);
      ctx.status = 500;
      ctx.body   = {error: 'Internal server error'};
    }
  }
});

middleware(app);

export default app;
