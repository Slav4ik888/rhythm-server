import { Context } from '../../../app/types/global';
import { createLogTemp, loggerDocuments as logger } from '../../../libs/loggers';
import models from '../../../models';
import { RequestTransactions } from '../../../models/transactions';
import { responseError } from '../../../views';



export async function sendTransactionsController(ctx: Context): Promise<any> {
  const
    { requestId, transactions } = ctx.request.body as RequestTransactions,
    debugName = transactions[0].debug.userAction,
    // TODO: if some transactions, must be unique debugName for 
    logTemp = createLogTemp(ctx, 'sendTransactions', `${debugName}: ${requestId}`),
    error   = responseError(ctx, logger, logTemp);
  
  try {
    await models.transactions.sendTransactions(ctx);
    logger.info(`${logTemp} success`);
  }
  catch (err) {
    error(err);
  }
}
