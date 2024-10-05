import { SCHEMA_NAME } from '../../../../../../libs/validators/ajv/schemas';


export const schema = {
  $id                  : SCHEMA_NAME.RESET_EMAIL_PASSWORD,
  type                 : 'object',
  required             : ['email'],
  additionalProperties : false,

  properties: {
    email: { $ref: `${SCHEMA_NAME.DEFS_BASE}#/definitions/email` }
  }
};
