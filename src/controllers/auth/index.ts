import { signupByEmailController as signupByEmail } from './signup'
import { loginController as login } from './login'
import { resetEmailPasswordController as resetEmailPassword } from './reset-email-password'
import { logoutController as logout} from './logout'


export default {
  login,
  resetEmailPassword,
  signupByEmail,
  logout,
}
