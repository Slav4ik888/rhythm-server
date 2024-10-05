import { Condition, MOCK_FIX_DATE } from '../../../../base';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { MOCK_USER_ID, User } from '../../../../users';
import { RuleType, Rule } from '../../../types';


export const NEW_RULE: Rule = {
  id          : 'new-rule',
  condition   : Condition.DRAFT,
  label       : '',
  
  parentId    : '',

  type        : RuleType.SIMPLE,
  order       : 1000,
  body        : '',

  createdAt   : MOCK_FIX_DATE,
  lastChange  : MOCK_FIX_DATE
};


export const USER = {
  id        : MOCK_USER_ID,
  companyId : MOCK_COMPANY_ID
} as User;
