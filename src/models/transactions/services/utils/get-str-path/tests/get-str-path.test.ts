import { getStrPath } from '..';


describe('getStrPath', () => {
  test('Invalid path', () => {
    expect(getStrPath(undefined)).toEqual('');
  });
  test('! length path', () => {
    expect(getStrPath([])).toEqual('');
  });
  test('Valid path', () => {
    expect(getStrPath(['Valid', 'str', 'path'])).toEqual('Valid.str.path');
  });
  test('Empty path', () => {
    expect(getStrPath([''])).toEqual('');
  });
});

// npm run test:unit get-str-path.test.ts
