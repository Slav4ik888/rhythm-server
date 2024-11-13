import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


export const schema = {
  $id                  : SCHEMA_NAME.POSITION,
  type                 : 'object',
  required             : ['id'],
  additionalProperties : false,

  properties: {
    id   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
      
    // ITEM-BASE
    condition   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/condition` },
    label       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/label` },
    description : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/description` },
    comment     : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/comment` },
    order       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/order` },

    createdAt   : { $ref: SCHEMA_NAME.FIX_DATE},
    lastChange  : { $ref: SCHEMA_NAME.FIX_DATE}
  }
};