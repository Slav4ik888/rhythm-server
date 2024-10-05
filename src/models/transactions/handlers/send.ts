import { Context } from '../../../app/types/global';
import { getCompanyId } from '../../companies';
import { getUserId } from '../../users';
import { OperationCommand, RequestTransactions } from '../model/types';
import { operationSet, operationUpdate, operationListAfter, operationDelete, operationDeleteList } from '../services';



/**
 * @requires body.RequestTransactions
 */
export const sendTransactionsModel = async (ctx: Context): Promise<void> => {
  const
    { requestId, transactions } = ctx.request.body as RequestTransactions,
    companyId = getCompanyId(ctx),
    userId = getUserId(ctx);

  // TODO: Permissions

  // TODO: Validation


  for await (let t of transactions) {
    for await (let operation of t.operations) {
      
      switch (operation.command) {        
        case OperationCommand.SET:
          await operationSet({ ctx, operation });
          break;
        
        case OperationCommand.UPDATE:
          await operationUpdate({ ctx, operation });
          break;
        
        case OperationCommand.LIST_AFTER:
          await operationListAfter({ ctx, operation });
          break;
        
        case OperationCommand.DELETE:
          await operationDelete({ ctx, operation });
          break;
        
        case OperationCommand.DELETE_LIST:
          await operationDeleteList({ ctx, operation });
          break;
        
        default: throw ctx.throw(400, { general: `Не настроен ${operation.command}` });
      }
    };

    // switch (t.debug.userAction) {
    //   case DebugUserAction.DOCUMENT_FREESPACE_SHEET_ITEM_ADD:
    //     await transactionAddSheetItem(t.operations[0], companyId, userId);
    //     await transactionUpdateDocument(t.operations[1], companyId, userId);
    //     break;
        
    //   default: throw ctx.throw(400, { general: 'Не настроен запрошенный DebugUserAction' });
    // }
  };

  ctx.status = 200;
};
