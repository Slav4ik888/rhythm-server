import { DbRef, getRefDoc } from '../../../helpers';


/** Delete user & account data */
export async function deleteCompanyData(companyId: string): Promise<void> {
  if (! companyId) return;
  
  // TODO: verification if owner or Superadmin

  await getRefDoc(DbRef.COMPANY, { companyId }).delete();
  console.log(`deleteCompanyData: ${companyId} successfully!`);
}
