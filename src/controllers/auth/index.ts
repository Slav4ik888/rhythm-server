import { signupByEmailStartController as signupByEmailStart } from './signup/by-email-start'
import { signupByEmailEndController as signupByEmailEnd } from './signup/by-email-end'
import { loginController as login } from './login'
import { resetEmailPasswordController as resetEmailPassword } from './reset-email-password'


export default {
  signupByEmailStart,
  signupByEmailEnd,
  resetEmailPassword,
  login,
}
