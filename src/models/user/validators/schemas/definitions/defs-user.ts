import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


export const definitions = {
  $id  : SCHEMA_NAME.DEFS_USER,
  type : 'object',
  additionalProperties : false,

  definitions: {
    id: {
      type      : 'string',
      minLength : 28,
      maxLength : 28
    },

    // Разрешения на обработку персональных данных
    permissions: {
      type: 'boolean'
    },
    emailVerified: {
      type: 'boolean'
    },
    status    : { isUserStatus: 'string' },
    role      : { isRole: 'string' },

    positions : {
      type  : 'array',
      items : {
        $ref: SCHEMA_NAME.POSITION
      },
      maxItems: 50
    },

    isEditAccess: {
      type: 'boolean'
    },

    settings: {
      type: 'object',
      additionalProperties : false,
      properties: {
        hintsDontShowAgain: {
          type  : 'array',
          items : {
            type: 'string',
            maxLength : 100
          },
          maxItems: 50
        }
      }
    },

    order       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/order` },
    createdAt   : { $ref: SCHEMA_NAME.FIX_DATE },
    lastChange  : { $ref: SCHEMA_NAME.FIX_DATE }
  }
}
