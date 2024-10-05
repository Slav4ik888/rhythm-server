import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


export const schema = {
  $id      : SCHEMA_NAME.FOLDER,
  type     : 'object',
  required : ['id'],
  additionalProperties : false,

  properties: {
    id         : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
    companyId  : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
    parentId   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/parentId` },
    
    label      : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/label` },

    condition  : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/condition` },
    order      : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/order` },
    
    createdAt  : { $ref: SCHEMA_NAME.FIX_DATE},
    lastChange : { $ref: SCHEMA_NAME.FIX_DATE}
  }
};
