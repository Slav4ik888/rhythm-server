import { Next } from 'koa';
import { Context } from '../../../../app/types/global';
import fs from 'fs';
import path from 'path';



export const logsErrorsClearModel = async (ctx: Context, next: Next): Promise<any> => {
  const logPath = path.join(__dirname, '../../../../logs/errors.log');

  try {
    // Создаем пустой файл (перезаписываем)
    fs.writeFileSync(logPath, '');

    ctx.body = {
      message: 'Log file successfully cleared',
      timestamp: new Date().toISOString()
    };
  }
  catch (error) {
    ctx.status = 500;
    ctx.body = 'Error reading log file';
  }
};
