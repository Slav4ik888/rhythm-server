import { Rule } from '..';
import { DbRef, getRefDoc } from '../../helpers';


/** Get Rule in DB */
export const serviceGetRuleById = async (companyId: string, id: string, parentId: string): Promise<Rule> => {

  const ruleDoc = await getRefDoc(DbRef.RULE, { companyId, parentId, id }).get();

  if (ruleDoc.exists) return ruleDoc.data()

  return
};
