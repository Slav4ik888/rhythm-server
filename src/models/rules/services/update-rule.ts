import { creatorFixDate } from '../../base';
import { DbRef, getRefDoc } from '../../helpers';
import { PartialRule } from '../types';



/** Update Rule in DB */
export const serviceUpdateRule = async (rule: PartialRule, userId: string): Promise<undefined> => {
  // const
  //   companyId = rule.companyId,
  //   id        = rule.id,
  //   parentId  = rule.parentId;
  
  // rule.lastChange = creatorFixDate(userId);

  // await getRefDoc(DbRef.RULE, { companyId, parentId, id }).update(rule);

  return
};
