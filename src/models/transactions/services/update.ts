import { creatorFixDate } from '../../base';
import { OperationData } from '../model/types';
import { convertToDot, isField } from '../../../shared/utils/objects';
import { getDocPath } from './utils';
import { getUserId } from '../../users';



/** Update data in DB */
export const operationUpdate = async ({ ctx, operation }: OperationData): Promise<void> => {
  const
    data = { ...operation.args },
    userId = getUserId(ctx);
  
  if (isField(data, 'lastChange')) data.lastChange = creatorFixDate(userId);

  const dataInDot = convertToDot(data);

  await getDocPath(ctx, operation).update(dataInDot);
  return
};
