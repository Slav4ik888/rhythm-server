import { convertToDot, isField } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { DbRef, getRefDoc } from '../../../helpers';
import { Company } from '../../types';




/** Update Company in DB */
export const serviceUpdateCompany = async (company: Partial<Company>, userId: string): Promise<undefined> => {
  const companyId = company.id;
  
  if (isField(company, 'lastChange')) company.lastChange = creatorFixDate(userId);

  const dataInDot = convertToDot(company);

  await getRefDoc(DbRef.COMPANY, { companyId }).update(dataInDot);

  return
};
