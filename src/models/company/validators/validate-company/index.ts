import { Context } from 'koa';
import { PartialCompany } from '../../types';
import { SCHEMA_NAME, validate } from '../../../../libs/validators';


export const validateCompanyData = (ctx: Context, data: PartialCompany): void => {
  const { valid, errors } = validate(SCHEMA_NAME.COMPANY, data);
  if (! valid) ctx.throw(400, errors);
};
