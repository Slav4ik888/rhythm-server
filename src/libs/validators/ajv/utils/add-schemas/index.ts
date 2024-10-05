import Ajv from 'ajv';
import { schemaResetEmailPassword } from '../../../../../models/auth/reset-email-password/validators/schemas';
import { schemaAuthByLogin } from '../../../../../models/auth/login/validators/schemas';
import { schemaSignupData } from '../../../../../models/auth/signup/validators/schemas';
import { defsItemBase, schemaFixDate } from '../../../../../models/base/validators/schemas';
import { defsCompany, schemaCompany } from '../../../../../models/companies/validators/schemas';
import { defsFIO, defsPhone, defsUser, schemaPerson, schemaPhoneNumber, schemaPosition, } from '../../../../../models/users/validators/schemas';
import { defsBase } from '../../schemas';
import { schemaDeleteCompany } from '../../../../../models/auth/delete-accounts/validators/schemas';
import { schemaFolder } from '../../../../../models/folders/validators/schemas';
import { defsRule, schemaRule } from '../../../../../models/rules/validators/schemas';



export const addSchemas = (ajv: Ajv) => {
  ajv
    .addSchema([
      defsBase,

      // UI
      schemaFixDate,
      defsItemBase,

      // Auth
      schemaAuthByLogin,
      schemaResetEmailPassword,
      schemaSignupData,

      // User
      defsFIO,
      defsPhone,
      defsUser,
      schemaPerson,
      schemaPhoneNumber,
      schemaPosition,

      // Company
      defsCompany,
      schemaCompany,
      schemaDeleteCompany,

      // Folders
      schemaFolder,

      // Rules
      defsRule,
      schemaRule
    ])
};
