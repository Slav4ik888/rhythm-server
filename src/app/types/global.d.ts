import { Context as KoaContext } from 'koa';
import { SignupData, AuthByLogin } from '../../models';
import { User } from '../../models/users';


type Context = KoaContext & {
  request: {
    body?: {
      companyId?       : string
      email?           : string
      signupData?      : SignupData
      authByLogin?     : AuthByLogin
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
