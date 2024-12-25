import { DbRef, getRefCol } from '../../../../helpers';


/**
 * Get all view carditems which contained on the selected sheet
*/
export async function serviceDashboardViewGetCardsBySheetId(companyId: string, sheetId: string) {
  const cardItems  = [];
  
  const cardItemsRes = await getRefCol(DbRef.VIEWS, { companyId })
    .where('sheetId', '==', sheetId)
    .get();

  if (! cardItemsRes?.empty) cardItemsRes.forEach(f => cardItems.push(f.data()))

  return cardItems;
}
