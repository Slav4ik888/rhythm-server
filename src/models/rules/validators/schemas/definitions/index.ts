import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


export const definitions = {
  $id  : SCHEMA_NAME.DEFS_RULE,
  type : 'object',

  definitions: {
    body: {
      type      : 'string',
      maxLength : 10000000 // 10 000 000
    },
    type: {
      isRuleType: 'string'
    },

    executors : {
      type: 'array',
      items: {
        $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id`
      },
      maxItems: 100
    },
    supervising : {
      type: 'array',
      items: {
        $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id`
      },
      maxItems: 100
    },
    observers : {
      type: 'array',
      items: {
        $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id`
      },
      maxItems: 100
    },
    watchers : {
      type: 'array',
      items: {
        $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id`
      },
      maxItems: 100
    },
    unwatchers : {
      type: 'array',
      items: {
        $ref: `${SCHEMA_NAME.DEFS_ITEM_BASE}#/definitions/id`
      },
      maxItems: 100
    },
    
    // payers: {
    //   type : 'object',
    //   required: ['selected', 'payers'],
    //   properties: {
    //     selected: {
    //       type: 'number'
    //     },
    //     payers: {
    //       type: 'array',
    //       items: {
    //         $ref: SCHEMA_NAME.PAYER
    //       },
    //       maxItems: 10
    //     }
    //   }
    // },
  }
};
