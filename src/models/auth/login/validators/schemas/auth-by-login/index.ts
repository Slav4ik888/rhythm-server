import { SCHEMA_NAME } from '../../../../../../libs/validators/ajv/schemas';


export const schema = {
  $id                  : SCHEMA_NAME.AUTH_BY_LOGIN,
  type                 : 'object',
  required             : ['email', 'password'],
  additionalProperties : false,

  properties: {
    email    : { $ref: `${SCHEMA_NAME.DEFS_BASE}#/definitions/email` },
    password : { $ref: `${SCHEMA_NAME.DEFS_BASE}#/definitions/password` }
  }
};
