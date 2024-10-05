import { SCHEMA_NAME, validate } from '../../../../../../../libs/validators';


describe('SCHEMA_NAME.DELETE_COMPANY', () => {
  it('Valid with required data', () => {
    expect(validate(SCHEMA_NAME.DELETE_COMPANY, { email: 'korzan.va@mail.ru' }).valid).toEqual(true);
  });

  it('Invalid with full data', () => {
    const res = validate(SCHEMA_NAME.DELETE_COMPANY, { email: '@' });

    expect(res.valid).toEqual(false);
    expect(res.errors).toEqual({ email: 'Не верный формат данных, для поля "email".' });
  });
});

// npm run test:unit validate-delete-company-schema.test.ts
