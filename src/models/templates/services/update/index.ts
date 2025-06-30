import { Context } from '../../../../app/types/global';
import { creatorFixDate, FixDate } from '../../../base';
import { DbRef, getRefCol, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { db } from '../../../../libs/firebase';
import { convertToDot } from '../../../../shared/utils/objects';
import { UpdateTemplate } from '../../handlers/update';
import { PartialTemplate } from '../../types';



/** Add | Update Template in DB */
export const serviceUpdateTemplate = async (ctx: Context): Promise<UpdateTemplate> => {
  const { template, bunchUpdatedMs, bunchAction } = ctx.request.body as UpdateTemplate;
  const userId = getUserId(ctx);
  const fixDate = creatorFixDate(userId);
  const isBunchCreate = bunchAction === 'create';

  // Get a new write batch
  const batch = db.batch();

  // Set | Update template
  const ref = getRefDoc(DbRef.TEMPLATE, { bunchId: template.bunchId });
  const updated: PartialTemplate = {
    ...template,
    lastChange: fixDate,
  };

  if (isBunchCreate) {
    updated.createdAt = {} as FixDate;
    updated.createdAt = fixDate;
    batch.set(ref, { [updated.bunchId]: updated });
  }
  else {
    batch.update(ref, convertToDot({ [updated.bunchId]: updated }));
  }


  // Update bunchUpdated
  const refCol = getRefCol(DbRef.TEMPLATES).doc('bunchesUpdated');
  batch.update(refCol, convertToDot({ bunchesUpdated: { [updated.bunchId]: bunchUpdatedMs } }));

  // Commit the batch
  await batch.commit();

  return { template: updated, bunchUpdatedMs, bunchAction }
};
