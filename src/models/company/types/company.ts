import { FixDate } from '../../base';
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


/** Реквизиты компании */
export interface CompanyDetails {
  addressLegal   : Address // Юридический адрес
  addressActual  : Address // Фактический адрес
  addressMailing : Address // Почтовый адрес
  ITN            : string  // ИНН компании
  // manager        : Executive  // Executive
}



// Профиль компании
export interface Company {
  id            : string
  companyName   : string
  ownerId       : string
  owner         : string // email

  logoUrl       : string // https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media

  // payers: Payers           // Плательщики от компании
  // invoices: Array<Invoice> // Созданные счета компании
  // payments: Array<Payment> // Платежи компании
  subscribes    : Array<any> // SubscribesCompany
  
  // details?      : CompanyDetails
  status        : CompanyStatus

  // globalStyles? : CompanyGlobalStyles 
  // docsSettings: CompanyDocsSettings // Global docs settings

  createdAt     : FixDate
  lastChange    : FixDate
}
