import { PartialDocument } from '../types';
import { Context } from '../../../app/types/global';
import { objectFieldsToString } from '../../../shared/utils/objects';
import { creatorFixDate } from '../../base';
import { DbRef, getRefCol, getRefDoc } from '../../helpers';



interface ServiceAddDocument {
  newDocument: PartialDocument
}

/** Add new Document in DB */
export const serviceAddDocument = async (
  ctx      : Context,
  document : PartialDocument,
  userId   : string
): Promise<ServiceAddDocument> => {

  // Add document
  const documentRes = await getRefCol(DbRef.DOCUMENTS, document).add(document);
  
  if (! documentRes?.id) ctx.throw(400, { general: `Can not add document: ${objectFieldsToString(document)}`});
  
  const
    id         = documentRes.id,
    createdAt  = creatorFixDate(userId),
    lastChange = createdAt;

  document.id         = id;
  document.createdAt  = createdAt;
  document.lastChange = createdAt;

  // Complection document
  await getRefDoc(DbRef.DOCUMENT, document).update({ id, createdAt, lastChange });


  return { newDocument: document }
};
