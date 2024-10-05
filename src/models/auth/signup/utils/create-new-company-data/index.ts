import { Company, MOCK_COMPANY_EMPTY } from '../../../../companies';



export interface CreateNewCompany {
  companyName? : string,
  email        : string
}


export const createNewCompanyData = ({ companyName = '', email = '' }: CreateNewCompany): Company => ({
  ...MOCK_COMPANY_EMPTY,
  companyName,
  owner: email
});
