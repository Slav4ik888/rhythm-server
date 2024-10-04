import { Context as KoaContext } from 'koa';
import { SignupData, AuthByLogin } from '../../models';
import { Document, PartialDocument } from '../../models/documents';
import { FileOperationType, PersistentFileType } from '../../models/files';
import { Folder } from '../../models/folders';
import { PartialRule } from '../../models/rules';
import { User } from '../../models/users';


type Context = KoaContext & {
  request: {
    body?: {
      companyId?       : string
      email?           : string
      folder?          : Folder
      activeFolder?    : Folder
      document?        : Document
      updatedDocument? : PartialDocument
      rule?            : PartialRule
      updatedRule?     : PartialRule
      deletedLinks?    : string[]
      signupData?      : SignupData
      authByLogin?     : AuthByLogin
    }
  },
  state: {
    user?      : User
    callback?  : boolean
    operation? : FileOperationType
    id?        : string
    parentId?  : string 
    files?     : PersistentFileType[]
  }
}

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
