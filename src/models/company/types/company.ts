import { FixDate } from '../../base';
import { CompanyDashboardMember, CompanyProfileMember } from './access';
import { Address } from './address';



/**
 * Временно для компаний которых я подключил к Ритму
 * До тех пор пока не сделаю возможность настройки dashboard в виде Конструктора
 * с сохранением конструкции в аккаунте компании
 */
export enum ActivatedCompanyId {
  OSNOVA     = "89MM9qHJLJlY5DZp1T9S",
  CSS        = "jOiXJDIY0nJeiIuBMtI4",
  DEMO_PECAR = "demo_pecar",
}


export enum CompanyStatus {
  NEW     = 'NEW',    // 'Зарегистрирован'
  ACTIVE  = 'ACTIVE', // 'Активный'
  REMOVED = 'REMOVED' // 'Удалён'
}


export interface GoogleData {
  url: string
}


/** Для сохранения уникальных настроек переменных (цветов и констант) */
export type ColorSettingsType = 'color' | 'background'

export interface ColorSettings {
  title?      : string // Можно исп для periodType, напр. "Мес" | "Нед"
  color?      : string
  background? : string
}

export interface CustomSettings {
  // [key: string]: ColorSettings
  periodType?  : Record<string, ColorSettings>
  companyType? : Record<string, ColorSettings>
  productType? : Record<string, ColorSettings>
}


/**
 * v.2025-06-20
 * Профиль компании
 */
export interface Company {
  id                : string
  companyName       : string
  ownerId           : string
  owner             : string // email

  logoUrl          : string // https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media
  status           : CompanyStatus

  googleData       : GoogleData
  // dashboardData  : CompanyDashboardData
  customSettings   : CustomSettings
  viewUpdated      : FixDate // Timestamp last ViewItems updated. При любом изменении ViewItems - обновляем

  dashboardMembers : CompanyDashboardMember[]
  companyMembers   : CompanyProfileMember[]
  createdAt        : FixDate
  lastChange       : FixDate
}

export type PartialCompany = Partial<Company> & { id: string }

/** Обязательные поля для чужого пользователя прошедшего по ссылке */
export type ParamsCompany = PartialCompany & {
  customSettings   : CustomSettings
  googleData       : GoogleData
  viewUpdated      : FixDate // Timestamp last ViewItems updated
  dashboardMembers : CompanyDashboardMember[]
  companyMembers   : CompanyProfileMember[]
}
