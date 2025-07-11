import { Context } from '../../../../app/types/global';
import { ERROR_NAME, getErrorText } from '../../../../libs/validators';
import { getUserId } from '../../../user';
import { serviceCompanyDeleteSheet } from '../../services';
import { PartialCompany } from '../../types';



export interface DeleteSheet {
  companyId : string
  sheetId   : string
}


export const companyDeleteSheetModel = async (ctx: Context): Promise<void> => {
  const { companyId, sheetId } = ctx.request.body as DeleteSheet;
  const userId = getUserId(ctx);

  if (! companyId || ! sheetId) return ctx.throw(400, { general: getErrorText(ERROR_NAME.INVALID_DATA)})

  // TODO: Permissions
  // TODO: проверка наличия вложенных ViewItems - Нельзя удалять пока они есть


  // Update
  await serviceCompanyDeleteSheet(companyId, sheetId, userId);

  ctx.body = ctx.request.body;
};
