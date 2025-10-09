import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas/schema-names';


export const definitions = {
  $id  : SCHEMA_NAME.DEFS_FIO,
  type : 'object',

  definitions: {
    firstName  : {
      type      : 'string',
      maxLength : 30
    },
    secondName : {
      type      : 'string',
      maxLength : 50
    },
    middleName : {
      type      : 'string',
      maxLength : 30
    }
  }
}
