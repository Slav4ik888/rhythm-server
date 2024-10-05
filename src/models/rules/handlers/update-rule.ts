import { Context } from '../../../app/types/global';
import { validateRule } from '../validators/validate-rule';
import { serviceUpdateRule } from '../services';
import { serviceUpdateRuleTitle, getRuleTitleFields } from '../../rule-titles';
import { PartialRule } from '../types';
import { delete as deleteImages } from '../../files';



export interface UpdatedConfig {
  updatedRule   : PartialRule
  deletedLinks? : string[]
}


/**
 * @requires body as UpdatedConfig
 */
export const updateRuleModel = async (ctx: Context): Promise<void> => {
  const
    { updatedRule, deletedLinks } = ctx.request.body,
    userId = ctx.state.user.id;

  // TODO: Permissions
  
  validateRule(ctx, updatedRule);

  // TODO: преобразование вложенностей в rule по точкам: 'field.user.id: 123'

  // UpdateRule
  await serviceUpdateRule(updatedRule, userId);

  const ruleTitle = getRuleTitleFields(updatedRule);
  // await serviceUpdateRuleTitle(ruleTitle, userId);

  await deleteImages(ctx, deletedLinks);

  ctx.status = 200;
};
