import { Next } from 'koa';
import { Context } from '../../../../app/types/global';
import fs from 'fs';
import path from 'path';



export const logsErrorsDownloadModel = async (ctx: Context, next: Next): Promise<any> => {
  const logPath = path.join(__dirname, '../../../../logs/errors.log');

  try {
    if (! fs.existsSync(logPath)) {
      ctx.status = 404;
      ctx.body = 'Log file not found';
      return;
    }

    // Проверка размера файла
    const stats = fs.statSync(logPath);
    if (stats.size > 50 * 1024 * 1024) { // 50MB limit
      ctx.status = 413;
      ctx.body = 'Log file too large';
      return;
    }

    ctx.set('Content-Type', 'text/plain');
    ctx.set('Content-Disposition', 'attachment; filename="errors.log"');
    ctx.body = fs.createReadStream(logPath);
  }
  catch (error) {
    ctx.status = 500;
    ctx.body = 'Error reading log file';
  }
};
