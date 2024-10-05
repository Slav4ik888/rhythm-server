import { isField } from '../../../shared/utils/objects';
import { creatorFixDate } from '../../base';
import { getUserId } from '../../users';
import { OperationData } from '../model/types';
import { getDocPath } from './utils';



/** Set new data in DB */
export const operationSet = async ({ ctx, operation }: OperationData): Promise<void> => {
  const
    data = { ...operation.args },
    userId = getUserId(ctx),
    lastChange = creatorFixDate(userId);

  if (isField(data, 'createdAt'))  data.createdAt  = lastChange;
  if (isField(data, 'lastChange')) data.lastChange = lastChange;

  await getDocPath(ctx, operation).set(data);
  
  return
};
