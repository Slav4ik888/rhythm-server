import * as auth from './auth'
import * as base from './base'
import * as companies from './companies'
import * as users from './users'
import * as docs from './docs'
import * as transactions from './transactions'
import * as folders from './folders'
import * as documents from './documents'
import * as rules from './rules'
import * as files from './files'

export { SignupData, AuthByLogin } from './auth'
export { creatorCompany, MOCK_OWNER_ID, MOCK_COMPANY_ID } from './companies'


export default {
  auth,
  base,
  companies,
  users,
  transactions,
  docs,
  folders,
  documents,
  rules,
  files
}
