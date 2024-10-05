import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


export const schema = {
  $id      : SCHEMA_NAME.RULE,
  type     : 'object',
  required : ['id', 'companyId'],
  additionalProperties : false,

  properties: {
    id          : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
    companyId   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id` },
    parentId    : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/parentId` },
    
    label       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/label` },

    condition   : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/condition` },
    order       : { $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/order` },
    
    type        : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/type` },
    body        : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/body` },

    executors   : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/executors` },
    supervising : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/supervising` },
    observers   : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/observers` },
    watchers    : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/watchers` },
    unwatchers  : { $ref: `${SCHEMA_NAME.DEFS_RULE}#/definitions/unwatchers` },

    createdAt   : { $ref: SCHEMA_NAME.FIX_DATE},
    lastChange  : { $ref: SCHEMA_NAME.FIX_DATE}
  }
};
