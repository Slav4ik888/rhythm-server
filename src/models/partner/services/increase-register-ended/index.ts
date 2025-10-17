import { DbRef, getRefDoc } from '../../../helpers';
import { convertToDot } from '../../../../shared/utils/objects';
import { PartnerData } from '../../types';
import { getCurrentMs } from '../../../../shared/utils/dates';
import { CompanyId } from '../../../company';
import { Email } from '../../../base';



/** increase register ended in DB */
export const serviceIncreaseRegisterEnded = async (
  partnerId : string,
  email     : Email,
  companyId : CompanyId
): Promise<undefined> => {

  // Set | Update
  const ref = getRefDoc(DbRef.PARTNER, { partnerId });

  const docTemp = await ref.get();
  if (docTemp.exists) {
    const partner = docTemp.data() as PartnerData;

    ref.update(convertToDot({
      registered: partner.registered
        ? partner.registered + 1
        : 1,

      registeredData: {
        [email]: {
          email,
          companyId,
          createdAt: getCurrentMs()
        }
      }
    }));
  }

  return
};
