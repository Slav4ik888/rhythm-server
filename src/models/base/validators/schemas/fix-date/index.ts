import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas/schema-names';


export const schema = {
  $id                  : SCHEMA_NAME.FIX_DATE,
  type                 : 'object',
  required             : ['userId', 'date'],
  additionalProperties : false,

  properties: {
    userId : { $ref: `${SCHEMA_NAME.DEFS_USER}#/definitions/userId` },
    date   : { $ref: `${SCHEMA_NAME.DEFS_BASE}#/definitions/date`}
  }
};
