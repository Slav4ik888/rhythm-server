import { Context } from '../../../app/types/global';
import { isStr } from '../../validators';
import { getUserDataTemp } from '../get-user-data-temp';

/**
 * Create log template
 * exm:
 *  [user]: <userId>, [email]: <email>, [functionName]: <functionName>, [value]: <value>
 *  [user]: lnmqB8rgzNYFSRZ7STmE8U6YBlt2, [email]: korzan.va@mail.ru, [functionName]: signupByLogin, [value]: 123
 */
export const createLogTemp = (
  ctx          : Context,
  functionName : string,
  value?       : string
): string => {

  let res = getUserDataTemp(ctx);
  res += `, [functionName]: ${functionName}`;

  if (value) res += `, [value]: ${value}`

  return res
};
