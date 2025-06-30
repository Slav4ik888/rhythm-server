import { Context } from '../../../../app/types/global';
import { BunchesUpdated } from '../../../../shared/lib/structures/bunch';
import { serviceGetTemplatesBunches } from '../../services';
import { Template } from '../../types';



/** 2025-06-29 */
export interface ResGetTemplates {
  bunchUpdated : BunchesUpdated
  templates    : Template[]
}


/**
 * Get all templates Bunches
 */
export async function getTemplatesModel(ctx: Context): Promise<any> {
  const result = await serviceGetTemplatesBunches();

  ctx.body = result;
}
