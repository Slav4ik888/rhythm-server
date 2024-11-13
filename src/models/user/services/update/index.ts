import { convertToDot, isField } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { User } from '../../types';




/** Update User in DB */
export const serviceUpdateUser = async (user: Partial<User>, userId: string): Promise<undefined> => {
  const
    companyId = user.companyId,
    id        = user.id;
  
  if (isField(user, 'lastChange')) user.lastChange = creatorFixDate(userId);

  const dataInDot = convertToDot(user);
  console.log('dataInDot: ', dataInDot);

  await getRefDoc(DbRef.USER, { companyId, userId: id }).update(dataInDot);

  return
};
