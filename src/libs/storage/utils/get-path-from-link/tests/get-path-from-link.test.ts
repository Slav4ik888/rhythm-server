import { getPathFromLink } from '..';

const LINK = 'https://firebasestorage.googleapis.com/v0/b/company-rules-users/o/fqzrbxrjPgQ12xoDHbZW%2Frule_image%2FgcJ0GvAEBnBO0g7diaaV%2Fv6x2l4m4g217ffw4cfqy.jpg?alt=media&token=5949e815-65b0-40b8-9e4d-04228c54ba60';

describe('getPathFromLink', () => {
  test('Empty link', () => expect(getPathFromLink('')).toEqual(undefined));
  test('Undefined link', () => expect(getPathFromLink(undefined)).toEqual(undefined));
  
  test('Valid link', () => {
    expect(getPathFromLink(LINK)).toEqual('fqzrbxrjPgQ12xoDHbZW/rule_image/gcJ0GvAEBnBO0g7diaaV/v6x2l4m4g217ffw4cfqy.jpg');
  });
});

// npm run test:unit get-path-from-link.test.ts
