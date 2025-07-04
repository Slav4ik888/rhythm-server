import { Context } from 'koa';
import { SCHEMA_NAME, validate } from '../../../../../libs/validators';
import { SignupDataEnd } from '../../types';


export const validateSignupDataEnd = (ctx: Context, data: SignupDataEnd): void => {
  const { valid, errors } = validate(SCHEMA_NAME.SIGNUP_DATA_END, data);
  if (! valid) ctx.throw(400, errors);
};
