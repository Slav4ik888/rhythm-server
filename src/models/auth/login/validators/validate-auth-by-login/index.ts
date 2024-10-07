import { Context } from 'koa';
import { SCHEMA_NAME, validate } from '../../../../../libs/validators';
import { AuthByLogin } from '../../types';



export const validateAuthByLogin = (ctx: Context, data: AuthByLogin | undefined): void => {
  const { valid, errors } = validate(SCHEMA_NAME.AUTH_BY_LOGIN, data);
  if (! valid) ctx.throw(400, errors);
}
