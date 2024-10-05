import { Context } from '../../../../app/types/global';
import { SCHEMA_NAME, validate } from '../../../../libs/validators';
import { Folder } from '../../types';



export const validateFolder = (ctx: Context, data: Folder): void => {
  const { valid, errors } = validate(SCHEMA_NAME.FOLDER, data);
  if (! valid) ctx.throw(400, errors);
};
