import { cloneObj } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { Company, CompanyStatus } from '../../types';



export const creatorCompany = (cfg: Partial<Company> = {} as Company): Company => cloneObj({
  id            : cfg.id          || '',
  companyName   : cfg.companyName || '',
  ownerId       : cfg.ownerId     || '',
  owner         : cfg.owner       || '',

  logoUrl       : cfg.logoUrl     || '', // 'TODO: save in FB Cloude', // 'https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media'
  status        : cfg.status      || CompanyStatus.NEW,
  subscribes    : cfg.subscribes  || [], // SubscribesCompany
  // details       : cfg.details     || {} as CompanyDetails,

  createdAt     : cfg.createdAt   || creatorFixDate(cfg.id),
  lastChange    : cfg.lastChange  || creatorFixDate(cfg.id)
});
