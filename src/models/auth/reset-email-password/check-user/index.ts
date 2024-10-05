import { Context } from '../../../../app/types/global';
import { gtt } from '../../../../shared/translate';
import { serviceFindUserByEmail } from '../../../users';
import { Languages } from '../../../users/types';


/** Проверяем есть ли такой пользователь в базе, если нет, то выпадет ошибка */
export const checkUser = async (ctx: Context, email: string, l: Languages) => {
  const user = await serviceFindUserByEmail(email);
  if (! user) ctx.throw(400, { email: gtt[l]['Пользователь с таким email не найден'] });
};
