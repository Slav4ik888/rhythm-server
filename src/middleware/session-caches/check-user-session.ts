import { Next } from 'koa';
import { Context } from '../../app/types/global';
import { getSessionData } from '../../libs/firebase';
import { serviceFindUserById } from '../../models/user';
import { ERR_CODE, getErrorMessage, NotAutorized } from '../../views';
import { redisGetSession, redisSetSession } from '../../libs/redis';



/**
 * Проверяем по пришедшему userId актуальность cookie
 * если всё Ок добавляем в ctx.state.user сохранённые данные пользователя
 * если нет то fbAuth
 */
export async function checkUserSession(ctx: Context, next: Next) {
  const { cookie, userId } = getSessionData(ctx);
  const userSession = await redisGetSession(userId);

  if (userSession.cookie !== cookie  || ! userSession.user || ! userId) throw new NotAutorized(getErrorMessage(ERR_CODE.CookieNotAuth))

  if (userSession.user) {
    ctx.state.user = { ...userSession.user }
  }
  else { // Отсутствуют данные пользователя, запрашиваем и сохраняем
    // TODO: решить ситуацию, когда userId - undefined (надо разлогинется и заново войти)
    const user = await serviceFindUserById(userId);

    await redisSetSession(userId, cookie, user);
    ctx.state.user = { ...user }
  }

  return next();
}



// - Проверяем по пришедшему userId, есть ли в Redis:
//    "+":
//        - то сверяем имеющийся там куки с тем что пришёл:
//          "+":
//               - Достаём из Redis данные userId
//               - Сохраняем их в ctx.state.user = { ...user } as User;
//          "-": Проверка1
//
//    "-":
//        Проверка1:
//         - fbAuth:
//            "+":
//                 - Сохраняем в Redis текущий куки и актуальные данные userId
//            "-":
//                 - Отказ в доступе (должен заново залогиниться)
//
