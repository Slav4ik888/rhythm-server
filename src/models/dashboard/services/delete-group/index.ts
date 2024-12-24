import { Context } from '../../../../app/types/global';
import { db } from '../../../../libs/firebase';
import { convertToDot } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { getCompanyId } from '../../../company';
import { DbRef, getRefDoc } from '../../../helpers';
import { getUserId } from '../../../user';
import { NO_PARENT_ID } from '../../consts';
import { DeleteCard } from '../../handlers/view/delete';



/** Delete group CardItems from DB */
export const serviceDashboardViewDeleteGroup = async (ctx: Context, data: DeleteCard): Promise<undefined> => {
  const { parentId, allIds, parentChildrenIds } = data;
  const companyId  = getCompanyId(ctx);
  
  // Get a new write batch
  const batch = db.batch();

  allIds.forEach(id => { 
    const ref = getRefDoc(DbRef.VIEW, { companyId, id });
    batch.delete(ref);
  });

  
  // Убираем Id удаляемого Item из childreIds у Родителя
  if (parentId !== NO_PARENT_ID) {
    const userId = getUserId(ctx);
    
    const parentItem = {
      parentChildrenIds,
      lastChange: creatorFixDate(userId),
    };

    const dataInDot = convertToDot(parentItem);
    console.log('dataInDot: ', dataInDot);

    const ref = getRefDoc(DbRef.VIEW, { companyId, id: parentId });
    batch.update(ref, dataInDot);
  }
  
  // Commit the batch
  await batch.commit();

  return
};
