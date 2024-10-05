import { changeSequence } from '../../../shared/utils/arrays';
import { convertToDot, getValueByScheme, setValueByScheme } from '../../../shared/utils/objects';
import { OperationData } from '../model/types';
import { getDocPath, getStrPath } from './utils';



/** Set id into 'array[id]' in main element, & save to DB */
export const operationListAfter = async ({ ctx, operation }: OperationData): Promise<void> => {
  const
    { id, after } = operation.args,
    docPath = getDocPath(ctx, operation),
    docRes = await docPath.get();
  
  if (! docRes.exists) ctx.throw(400, { general: `No such document - "${operation.pointer.id}"` })
  
  const
    doc     = docRes.data(),
    scheme  = getStrPath(operation.path),
    list    = getValueByScheme(doc, scheme) as string[], // Ids
    newList = changeSequence(list, id, after),
    obj     = {};

  setValueByScheme(obj, scheme, newList);
    
  const dataInDot = convertToDot(obj);

  await docPath.update(dataInDot);
  
  return
};
