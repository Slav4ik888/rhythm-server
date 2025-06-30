import { Bunch } from '../../../../shared/lib/structures/bunch';
import { ViewItemId } from '../../../dashboard-view/types';
import { DbRef, getRefCol } from '../../../helpers';
import { ResGetTemplates } from '../../handlers/get-bunches';
import { Template } from '../../types';



/**
 * Get bunches by bunchIds
 */
export async function serviceGetTemplatesBunches(): Promise<ResGetTemplates> {
  const results: ResGetTemplates = {
    templates    : [],
    bunchUpdated : {}
  }

  const tempRes = await getRefCol(DbRef.TEMPLATES).get();

  if (! tempRes?.empty) {
    tempRes.forEach(temp => {
      const bunch = temp.data();

      if (bunch.hasOwnProperty('bunchUpdated')) {
        results.bunchUpdated = { ...bunch.bunchUpdated };
      }
      else {
        Object.values((bunch as Bunch<ViewItemId, Template>)).forEach(item => {
          results.templates.push(item);
        });
      }
    })
  }

  return results
}
