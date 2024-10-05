import { SchemaObjCxt } from 'ajv';
import { SCHEMA_NAME, isOneOfSeveral } from '../../../../../libs/validators';
import { RuleType } from '../../../types';


const conditions = Object.values(RuleType);


export const isRuleType = {
  keyword : 'isRuleType',
  compile : (_schema: SCHEMA_NAME, _parentSchema: SCHEMA_NAME, it: SchemaObjCxt) =>
    (data: RuleType) => isOneOfSeveral(conditions, data)
};
