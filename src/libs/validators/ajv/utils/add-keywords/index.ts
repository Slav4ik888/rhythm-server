import Ajv from 'ajv';
import { isCondition } from '../../../../../models/base/validators/schemas';
import { isCompanyStatus } from '../../../../../models/companies/validators/schemas';
import { isRuleType } from '../../../../../models/rules/validators/schemas';
import { isPhoneNumberScheme, isCountryCode, isPhoneType, isRole, isUserStatus } from '../../../../../models/users/validators/schemas';


export const addKeywords = (ajv: Ajv) => {
  ajv
    // Company
    // @ts-ignore
    .addKeyword(isCompanyStatus)

    // UI
    // @ts-ignore
    .addKeyword(isCondition)

    // User
    // @ts-ignore
    .addKeyword(isCountryCode)
    // @ts-ignore
    .addKeyword(isPhoneNumberScheme)
    // @ts-ignore
    .addKeyword(isPhoneType)
    // @ts-ignore
    .addKeyword(isRole)
    // @ts-ignore
    .addKeyword(isUserStatus)

    // Rules
    // @ts-ignore
    .addKeyword(isRuleType)
};
