import { Condition, MOCK_FIX_DATE } from '../../../../base';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { MOCK_USER_ID, User } from '../../../../users';
import { RuleTitle } from '../../../types';



export const NEW_RULE_TITLE: RuleTitle = {
  id          : 'new-rule-title-67890',
  companyId   : MOCK_COMPANY_ID, 
  condition   : Condition.DRAFT,
  label       : '',
  parentId    : '',
  order       : 1000,

  createdAt   : MOCK_FIX_DATE,
  lastChange  : MOCK_FIX_DATE
};


export const USER = {
  id        : MOCK_USER_ID,
  companyId : MOCK_COMPANY_ID
} as User;
