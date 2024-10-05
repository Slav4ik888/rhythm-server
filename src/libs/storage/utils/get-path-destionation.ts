import { Context } from '../../../app/types/global';
import { FileOperationType } from '../../../models/files';



/**
 * Возвращает путь к месту хранения в Storage
 */
export const getPathDestionation = (
  ctx: Context,
  // operation        : FileOperationType, // rule_image | payment | profile
  // companyId        : string,
  // id               : string,
  uploadedFileName : string,            // имя загружаемого файла в storage
  // userId?          : string
): string => {
  switch (ctx.state.operation) {
    case FileOperationType.RULE_IMAGE: return `${ctx.state.user.companyId}/${ctx.state.operation}/${ctx.state.id}/${uploadedFileName}`
  
    default: return
  }
}
