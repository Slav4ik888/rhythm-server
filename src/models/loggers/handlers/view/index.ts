import { Next } from 'koa';
import { Context } from '../../../../app/types/global';
import fs from 'fs';
import path from 'path';
import { PASS } from '../../../../logs/pass';



const hostname = 'https://rhy.thm.su'; // || 'http://localhost:7575';

export const logsViewModel = async (ctx: Context, next: Next): Promise<any> => {
  const { name, pass } = ctx.params;
  const logPath = path.join(__dirname, `../../../../logs/${name}.log`);

  try {
    if (pass !== PASS) {
      ctx.status = 403;
      ctx.body = 'Access denied';
      return;
    }

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

    const content = fs.readFileSync(logPath, 'utf8');

    // Отображаем как HTML с подсветкой
    ctx.type = 'html';
    ctx.body = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error Logs</title>
        <style>
          body { font-family: monospace; background: #f5f5f5; padding: 20px; }
          pre { background: white; padding: 20px; border-radius: 5px; }
          .actions { margin: 20px 0; }
          button { padding: 10px 20px; margin-right: 10px; cursor: pointer; }
          .danger { background: #a24f56; color: white; border: none; border-radius: 18px; margin-left: 16px; }
        </style>
      </head>
      <body>
        <h1>Error Logs</h1>
        <div class="actions">
          <a href="${hostname}/api/logs/download/${name}/${pass}" download>Download Log File</a>
          <button class="danger" onclick="clearLog()">Clear Log File</button>
        </div>
        <pre>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>

        <script>
          function clearLog() {
            fetch('${hostname}/api/logs/clear/${name}/${pass}', { method: 'GET' })
              .then(response => response.json())
              .then(data => {
                alert(data.message);
              })
              .catch(error => {
                alert('Error: ' + error);
              });
          }
        </script>
      </body>
      </html>
    `;
  }
  catch (error) {
    ctx.status = 500;
    ctx.body = 'Error reading log file';
  }
};
