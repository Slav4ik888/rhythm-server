import { isUndefined } from '../../../../libs/validators';
import { Condition, creatorFixDate } from '../../../base';
import { User } from '../../../users';
import { Rule, RuleType } from '../../types';



export interface RuleConfig {
  user       : Partial<User>
  id?        : string
  parentId   : string
  label?     : string
  type?      : RuleType
  body?      : string
  condition? : Condition
}


export const creatorRule = (cfg: RuleConfig): Rule | undefined => {
  if (! cfg?.user?.id || ! cfg?.user?.companyId || isUndefined(cfg?.parentId)) return;

  const {
    id = 'new-rule-01234567890',
    parentId = '',
    condition = Condition.DRAFT,
    label = '',
    type = RuleType.SIMPLE,
    body = '',
    user
  } = cfg;
  
  
  const rule: Rule = {
    id,
    condition,
    label,
    parentId,
    type,
    body,

    createdAt  : creatorFixDate(user.id),
    lastChange : creatorFixDate(user.id)
  };

  return rule
};
