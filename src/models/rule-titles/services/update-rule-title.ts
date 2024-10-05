import { creatorFixDate } from '../../base';
import { DbRef, getRefDoc } from '../../helpers';
import { PartialRuleTitle } from '../types';



/** Update RuleTitle in DB */
export const serviceUpdateRuleTitle = async (rule: PartialRuleTitle, userId: string): Promise<undefined> => {
  // const
  //   id        = rule.id,
  //   parentId  = rule.parentId;
  
  // rule.lastChange = creatorFixDate(userId);

  // await getRefDoc(DbRef.RULE_TITLE, { companyId, parentId, id }).update(rule);

  return
};
