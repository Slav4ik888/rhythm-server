import { Context } from 'koa';
import { SCHEMA_NAME, validate } from '../../../../../libs/validators';
import { SignupData } from '../../types';


export const validateSignupData = (ctx: Context, data: SignupData): void => {
  const { valid, errors } = validate(SCHEMA_NAME.SIGNUP_DATA, data);
  if (! valid) ctx.throw(400, errors);
};
