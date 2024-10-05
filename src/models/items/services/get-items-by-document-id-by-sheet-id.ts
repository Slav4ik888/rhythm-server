import { Item } from '../types';
import { DbRef, getRefCol } from '../../helpers';


/**
 * Get all items that are in this document
*/
export async function serviceGetItemsByDocumentIdBySheetId(
  companyId  : string,
  documentId : string,
  sheetId    : string
): Promise<Item[]>
{
  const items: Item[] = [];

  const itemsRes = await getRefCol(DbRef.ITEMS, { companyId, documentId })
    .where('documentId', '==', documentId)
    .where('sheetId', '==', sheetId)
    .get();

  if (! itemsRes?.empty) itemsRes.forEach(f => items.push(f.data()))

  return items;
}
