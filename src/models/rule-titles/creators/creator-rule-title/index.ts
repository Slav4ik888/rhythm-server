import { Condition, creatorFixDate } from '../../../base';
import { RuleTitle } from '../../types';



interface PartialUser {
  id        : string
  companyId : string
}

export interface RuleTitleConfig extends Partial<RuleTitle> {
  user       : PartialUser
  lastOrder? : number
}


export const creatorRuleTitle = (cfg: RuleTitleConfig) => {
  // if (! cfg?.user?.id || ! cfg?.user?.companyId) return;

  // const
  //   { id, parentId, label, lastOrder, user } = cfg,
  //   createdAt = creatorFixDate(user.id),
  //   lastChange = createdAt;

  
  // const ruleTitle: RuleTitle = {
  //   companyId   : user.companyId, 
  //   condition   : Condition.DRAFT,
  //   id          : id       || 'new-rule-title-67890',
  //   label       : label    || '',
  //   parentId    : parentId || '',
  //   order       : lastOrder ? lastOrder + 1000 : 1000,

  //   createdAt,
  //   lastChange
  // };

  // return ruleTitle
};
