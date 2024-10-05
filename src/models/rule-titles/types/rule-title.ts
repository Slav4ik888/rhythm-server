import { ItemBase, ReqDocFields } from '../../base';

/** Data to display of closed Rule */
export interface RuleTitle extends ItemBase {
  
}

// For request - required fields
export type PartialRuleTitle = ReqDocFields & Partial<RuleTitle>
