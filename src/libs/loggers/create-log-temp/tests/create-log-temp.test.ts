import { Context } from 'koa';
import { createLogTemp } from '..';


describe('createLogTemp', () => {
  const ctx = {
    state: {
      user: {
        email: 'korzan.va@mail.ru'
      }
    }
  } as Context;

  test('Valid data', () => {
    expect(createLogTemp(ctx, 'USER_TEST')).toEqual('[USER_TEST][korzan.va@mail.ru]');
  });

  test('Valid data with value', () => {
    expect(createLogTemp(ctx, 'USER_TEST', 'some value')).toEqual('[USER_TEST][korzan.va@mail.ru][some value]');
  });

  test('Ctx undefined', () => {
    expect(createLogTemp(undefined, 'USER_TEST')).toEqual('[USER_TEST][quest]');
  });

  test('Ctx is a Email', () => {
    expect(createLogTemp('korzan.va@mail.ru', 'USER_TEST')).toEqual('[USER_TEST][korzan.va@mail.ru]');
  });
});

// npm run test:unit create-log-temp.test.ts
