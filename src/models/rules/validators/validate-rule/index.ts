import { Context } from '../../../../app/types/global';
import { SCHEMA_NAME, validate } from '../../../../libs/validators';
import { PartialRule } from '../../types';



export const validateRule = (ctx: Context, data: PartialRule): void => {
  const { valid, errors } = validate(SCHEMA_NAME.RULE, data);
  if (! valid) ctx.throw(400, errors);
};
