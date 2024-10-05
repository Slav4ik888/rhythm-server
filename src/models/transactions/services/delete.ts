import { OperationData } from '../model/types';
import { getDocPath } from './utils';



/**
 * Delete one element from DB
 */
export const operationDelete = async ({ ctx, operation }: OperationData): Promise<void> => {
  console.log('operationDelete: ', operation.args.id);

  return await getDocPath(ctx, operation).delete();
};
