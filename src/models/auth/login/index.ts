import { validateAuthByLogin } from './validators';
import { setCookie } from '../../../libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../libs/firebase';
import { checkIsUserDisabled } from './services';
import { Context } from '../../../app/types/global';
import { serviceFindUserByEmail } from '../../users';



export async function loginModel(ctx: Context): Promise<any> {
  const data = ctx.request.body.authByLogin;

  validateAuthByLogin(ctx, data);
  
  await checkIsUserDisabled(ctx, data.email);
 
  const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
  const user = await serviceFindUserByEmail(data.email);

  await setCookie(ctx, userCredential, user, 'login');

  ctx.body = { message : 'Login is successfully!' }
}
