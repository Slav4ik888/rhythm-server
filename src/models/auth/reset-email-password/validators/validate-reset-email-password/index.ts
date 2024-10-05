import { Context } from '../../../../../app/types/global';
import { SCHEMA_NAME, validate } from '../../../../../libs/validators';



export const validateResetEmailPassword = (ctx: Context, email: string): void => {
  const { valid, errors } = validate(SCHEMA_NAME.RESET_EMAIL_PASSWORD, { email });
  if (! valid) ctx.throw(400, errors);
}
