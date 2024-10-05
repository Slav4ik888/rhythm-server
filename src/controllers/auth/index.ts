import { signupController as signup } from './signup'
import { loginController as login } from './login'
import { resetEmailPasswordController as resetEmailPassword } from './reset-email-password'
import { logoutController as logout} from './logout'
import { deleteCompanyAccount } from './delete-company-account'

export default {
  login,
  resetEmailPassword,
  signup,
  logout,
  deleteCompanyAccount
}
