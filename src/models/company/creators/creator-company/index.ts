import { cloneObj } from '../../../../shared/utils/objects';
import { creatorFixDate } from '../../../base';
import { Company, CompanyStatus } from '../../types';



/** v2025-06-21 */
export const creatorCompany = (cfg: Partial<Company> = {} as Company): Company => cloneObj({
  id               : cfg.id               || '',
  companyName      : cfg.companyName      || '',
  ownerId          : cfg.ownerId          || '',
  owner            : cfg.owner            || '',

  logoUrl          : cfg.logoUrl          || '', // 'TODO: save in FB Cloude', // 'https://firebasestorage.googleapis.com/v0/b/osnova-course.appspot.com/o/no-img-company.svg?alt=media'
  status           : cfg.status           || CompanyStatus.NEW,

  googleData       : cfg.googleData       || { url: '' }, // TODO: add to tests
  customSettings   : cfg.customSettings   || {},
  dashboardMembers : cfg.dashboardMembers || [],
  companyMembers   : cfg.companyMembers   || [],

  viewUpdated      : cfg.viewUpdated      || creatorFixDate(cfg.id),
  createdAt        : cfg.createdAt        || creatorFixDate(cfg.id),
  lastChange       : cfg.lastChange       || creatorFixDate(cfg.id)
});
