import { validateAuthByLogin } from './validators';
import { setCookie } from '../../../libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../libs/firebase';
import { checkIsUserDisabled } from './services';
import { Context } from '../../../app/types/global';
import { serviceFindUserByEmail } from '../../user';
import { AuthByLogin } from './types';



export async function loginModel(ctx: Context): Promise<any> {
  const data = ctx?.request?.body?.authByLogin || {} as AuthByLogin;
  const { email = '', password } = data;

  validateAuthByLogin(ctx, data);
  
  await checkIsUserDisabled(ctx, email);
 
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = await serviceFindUserByEmail(email);

  await setCookie(ctx, userCredential, user, 'login');

  ctx.body = { message : 'Login is successfully!' }
}
