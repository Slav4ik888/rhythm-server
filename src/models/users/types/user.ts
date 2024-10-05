import { Languages } from './languages'
import { ItemBase } from '../../base'
import { Person } from './person'
import { Position } from './positions'
import { Role } from './roles'
import { UserSettings } from './user-settings'


/** Типы состояние пользователя */
export enum UserStatus {
  NEW      = 'NEW',      // Зарегистрировался
  ACTIVE   = 'ACTIVE',   // Активный - Подтвердил регистрацию
  DISABLED = 'DISABLED', // Отключенный
  DELETED  = 'DELETED'   // Удалённый
}


/** При выборе нового элемента с помощью ListSelect  */
export type NewUserStatus = {
  status: UserStatus
}


/** Пользователь */
export interface User extends ItemBase {
  companyId     : string

  person        : Person
  email         : string  // korzan.va@mail.ru
  permissions   : boolean // Разрешения на обработку персональных данных

  positions     : Position[]
  role          : Role
  emailVerified : boolean
  status        : UserStatus

  settings      : UserSettings
}
