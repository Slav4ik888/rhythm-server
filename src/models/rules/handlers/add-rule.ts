import { Context } from '../../../app/types/global';
import { validateRule } from '../validators/validate-rule';
import { serviceAddRule } from '../services';


/**
 * @requires body.rule
 */
export const addRuleModel = async (ctx: Context): Promise<void> => {
  const { rule } = ctx.request.body;

  validateRule(ctx, rule);

  // TODO: Permissions

  const { newRule, newRuleTitle } = await serviceAddRule(ctx, rule, ctx.state.user.id);
  
  ctx.body = { newRule, newRuleTitle };
};
