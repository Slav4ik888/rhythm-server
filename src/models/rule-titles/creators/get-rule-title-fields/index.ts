import { isNotUndefined } from '../../../../libs/validators';
import { PartialRule } from '../../../rules';
import { PartialRuleTitle } from '../../types';


/**
 * Get only RuleTitle fields from Rule
 */
export const getRuleTitleFields = (rule: PartialRule) => {
  // const ruleTitle: PartialRuleTitle = {
  //   id          : rule.id,
  //   companyId   : rule.companyId, 
  //   parentId    : rule.parentId,
  //   lastChange  : rule.lastChange
  // };

  // if (rule.condition)             ruleTitle.condition = rule.condition
  // if (rule.order)                 ruleTitle.order     = rule.order
  // if (rule.createdAt)             ruleTitle.createdAt = rule.createdAt
  // if (isNotUndefined(rule.label)) ruleTitle.label     = rule.label

  // return ruleTitle
};
