import { PartialRule } from '../types';
import { Context } from '../../../app/types/global';
import { objectFieldsToString } from '../../../shared/utils/objects';
import { creatorFixDate } from '../../base';
import { DbRef, getRefCol, getRefDoc } from '../../helpers';
import { creatorRuleTitle, RuleTitle } from '../../rule-titles';


interface ServiceAddRule {
  newRule      : PartialRule
  newRuleTitle : RuleTitle
}

/** Add new Rule in DB */
export const serviceAddRule = async (ctx: Context, rule: PartialRule, userId: string): Promise<ServiceAddRule> => {

  // Add rule
  // const ruleRes = await getRefCol(DbRef.RULES, rule).add(rule);
  
  // if (! ruleRes?.id) ctx.throw(400, { general: `Can not add rule: ${objectFieldsToString(rule)}`});
  
  // const
  //   id         = ruleRes.id,
  //   createdAt  = creatorFixDate(userId),
  //   lastChange = createdAt;

  // rule.id         = id;
  // rule.createdAt  = createdAt;
  // rule.lastChange = createdAt;

  // // Complection rule
  // await getRefDoc(DbRef.RULE, rule).update({ id, createdAt, lastChange });

  // // Add ruleTitle
  // const
  //   newRuleTitle = creatorRuleTitle({
  //     ...rule,
  //     id,
  //     createdAt,
  //     lastChange,
  //     user: {
  //       id        : userId,
  //       companyId : rule.companyId
  //     }
  //   });

  // await getRefDoc(DbRef.RULE_TITLE, newRuleTitle).set(newRuleTitle);

  return //{ newRule: rule, newRuleTitle }
};
