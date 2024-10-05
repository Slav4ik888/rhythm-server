import { Context } from '../../../app/types/global';
import { serviceGetRuleById } from '../services';



/**
 * @requires params.ruleId
 */
export const getRuleByIdModel = async (ctx: Context): Promise<void> => {

  // TODO: Validate parentId, id

  // TODO: Permissions

  const rule = await serviceGetRuleById(ctx.state.user.companyId, ctx.params.ruleId, ctx.params.parentId);

  ctx.body = { rule };
};
