import { DbRef, getRefCol } from '../../../helpers';


/**
 * DEPRECATED
 * Get all view Viewitems which contained on the selected sheet
*/
export async function serviceDashboardViewGetViewsBySheetId(companyId: string, sheetId: string) {
  const viewItems  = [];

  const viewItemsRes = await getRefCol(DbRef.VIEWS, { companyId })
    .where('sheetId', '==', sheetId)
    .get();

  if (! viewItemsRes?.empty) viewItemsRes.forEach(f => viewItems.push(f.data()))

  return viewItems;
}
