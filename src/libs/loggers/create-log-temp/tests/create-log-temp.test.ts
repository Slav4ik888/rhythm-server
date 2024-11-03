import { Context } from 'koa';
import { createLogTemp } from '..';


describe('createLogTemp', () => {
  const ctx = {
    state: {
      user: {
        id    : 'lnmqB8rgzNYFSRZ7STmE8U6YBlt2',
        email : 'korzan.va@mail.ru',
      }
    }
  } as Context;

  test('Valid data', () => {
    expect(createLogTemp(ctx, 'USER_TEST')).toEqual('[user]: lnmqB8rgzNYFSRZ7STmE8U6YBlt2, [email]: korzan.va@mail.ru, [functionName]: USER_TEST');
  });

  test('Valid data with value', () => {
    expect(createLogTemp(ctx, 'USER_TEST', 'some value'))
      .toEqual('[user]: lnmqB8rgzNYFSRZ7STmE8U6YBlt2, [email]: korzan.va@mail.ru, [functionName]: USER_TEST, [value]: some value');
  });

  test('Ctx is undefined', () => {
    expect(createLogTemp(undefined, 'USER_TEST')).toEqual('[user]: quest, [functionName]: USER_TEST');
  });

  test('functionName is undefined', () => {
    expect(createLogTemp(ctx, undefined, 'some value'))
      .toEqual('[user]: lnmqB8rgzNYFSRZ7STmE8U6YBlt2, [email]: korzan.va@mail.ru, [functionName]: undefined, [value]: some value');
  });

  test('Ctx is a Email', () => {
    expect(createLogTemp('korzan.va@mail.ru' as unknown as Context, 'USER_TEST')).toEqual('[user]: quest, [functionName]: USER_TEST');
  });
});

// npm run test:unit create-log-temp.test.ts
