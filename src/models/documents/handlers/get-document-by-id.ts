import { Document } from '../types';
import { Context } from '../../../app/types/global';
import { serviceGetDocumentById } from '../services';
import { Item, serviceGetItemsByDocumentIdBySheetId } from '../../items';
import { getCompanyId } from '../../companies';



/**
 * @requires params.documentId
 */
export const getDocumentByIdModel = async (ctx: Context): Promise<void> => {
  const
    companyId = getCompanyId(ctx),
    { documentId, sheetId } = ctx.params;

  // TODO: Validate id

  // TODO: Permissions

  const
    document: Document = await serviceGetDocumentById(companyId, documentId),
    items: Item[]      = await serviceGetItemsByDocumentIdBySheetId(companyId, documentId, sheetId);

  ctx.body = { document, items };
};
