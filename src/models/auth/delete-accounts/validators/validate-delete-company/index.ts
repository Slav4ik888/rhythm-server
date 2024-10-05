import { Context } from 'koa';
import { SCHEMA_NAME, validate } from '../../../../../libs/validators';


export const validateDeleteCompanyData = (ctx: Context, email: string): void => {
  const { valid, errors } = validate(SCHEMA_NAME.DELETE_COMPANY, { email });
  if (! valid) ctx.throw(400, errors);
};
