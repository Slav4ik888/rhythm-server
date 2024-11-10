import { Context as KoaContext } from 'koa';
import { SignupData, AuthByLogin } from '../../models';
import { Company } from '../../models/companies';
import { User } from '../../models/users';



type Context = KoaContext & {
  request: {
    body?: {
      companyId?       : string
      email?           : string
      signupData?      : SignupData
      authByLogin?     : AuthByLogin
      userData?        : Partial<User>
      companyData?     : Partial<Company>
    }
  },
  state: {
    user?      : User
    callback?  : boolean
  }
}

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
