import { operationDelete } from './delete';
import { OperationData } from '../model/types';



/**
 * Delete list of elements from DB
 *  - without delete subcollections
 */
export const operationDeleteList = async ({ ctx, operation }: OperationData): Promise<void> => {
  console.log('operation.args.ids: ', operation.args.ids);

  for await (let id of operation.args.ids) {
    console.log('Delete id: ', id);

    await operationDelete({
      ctx,
      operation: {
        args    : { id },
        pointer : operation.pointer
      }
    });
  }
  return
};
