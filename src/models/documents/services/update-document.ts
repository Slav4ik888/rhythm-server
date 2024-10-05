import { convertToDot } from '../../../shared/utils/objects';
import { creatorFixDate } from '../../base';
import { DbRef, getRefDoc } from '../../helpers';
import { PartialDocument } from '../types';



/** Update Document in DB */
export const serviceUpdateDocument = async (document: PartialDocument, userId: string): Promise<undefined> => {
  // const
  //   companyId = document.companyId,
  //   id        = document.id;
  
  // document.lastChange = creatorFixDate(userId);

  // const dataInDot = convertToDot(document);
  // console.log('dataInDot: ', dataInDot);

  // await getRefDoc(DbRef.DOCUMENT, { companyId, id }).update(dataInDot);

  return
};
