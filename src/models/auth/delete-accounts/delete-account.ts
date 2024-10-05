// import models from '../..';
// import { admin } from '../../../libs/firebase';




// export async function deleteUser(req: RequestEnhanced, res: Response): Promise<any> {
//   // const
//   //   { userId, companyId } = req.params,
//   //   reqUser   = req.user,
//   //   { email } = req.user,
//   //   logTemp   = createLogTemp('deleteUser', email),
//   //   error     = createResError({ res, logger, logTemp });

//     logger.info(`${logTemp} start delete -> ${userId}...`);

//     // Определяем полномочия Запросителя для удаления аккаунта
//     const
//       resUser = { userId, companyId },
//       result  = verification(VerificationType.DEL_USER, reqUser, resUser);

//     if (result.result !== ResultType.SUCCESS) return error({ errObj: { error: result.errorMessage }});

//     // Вместо настоящего удаления делаем статус аккаунта не действительным
//     // а при попытке авторизоватся, выводится сообщение: "Данный аккаунт не действителен. Обратитесь в службу технической поддержки."
//     await admin.auth().updateUser(userId, { disabled: true });
    
//     // await deleteUserEntities(companyId, userId);

//     logger.info(`${logTemp} ${userId} successfully...`);
//     return res.status(200).json({ message: result.successMessage });
// }
