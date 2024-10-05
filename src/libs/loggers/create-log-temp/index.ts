import { Context } from 'koa';
import { isStr } from '../../validators';

/**
 * Create log template
 * exm: [Function name][Requester][value]
 *      [Signup][korzan.va@mail.ru][user: Slava]
 */
export const createLogTemp = (
  ctx          : Context | string,
  functionName : string,
  value?       : string
): string => {
  const email = isStr(ctx) ? ctx : (ctx as Context)?.state?.user?.email || 'quest';

  let res = `[${functionName}][${email}]`;

  if (value) res += `[${value}]`

  return res
};
