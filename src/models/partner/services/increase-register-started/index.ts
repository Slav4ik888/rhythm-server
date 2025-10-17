import { Context } from '../../../../app/types/global';
import { DbRef, getRefDoc } from '../../../helpers';
import { convertToDot } from '../../../../shared/utils/objects';
import { PartnerData } from '../../types';
import { SignupData } from '../../../auth';
import { getCurrentMs } from '../../../../shared/utils/dates';



/** increase register started in DB */
export const serviceIncreaseRegisterStarted = async (ctx: Context): Promise<undefined> => {
  const { signupData } = ctx.request.body as { signupData: SignupData };
  const { email, partnerId, companyName, firstName } = signupData;

  // Set | Update
  const ref = getRefDoc(DbRef.PARTNER, { partnerId });

  const docTemp = await ref.get();
  if (docTemp.exists) {
    const partner = docTemp.data() as PartnerData;

    ref.update(convertToDot({
      registerStarted: partner.registerStarted
        ? partner.registerStarted + 1
        : 1,

      registerStartedData: {
        [email]: {
          email,
          companyName,
          firstName,
          createdAt: getCurrentMs()
        }
      }
    }));
  }

  return
};
