import { validateDeleteCompanyData } from '..';
import { CtxClass } from '../../../../../../libs/tests';
import { Context } from 'koa';



describe('validateDeleteCompanyData', () => {
  it('Valid with required data', () => {
    const
      mockFn = jest.fn(),
      ctx    = new CtxClass(mockFn) as unknown as Context;

    validateDeleteCompanyData(ctx, 'korzan.va@mail.ru');
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });

  it('Invalid with required data', () => {
    const
      mockFn = jest.fn(),
      ctx    = new CtxClass(mockFn) as unknown as Context;
      
    validateDeleteCompanyData(ctx, 'asd');

    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toEqual(400);
    expect(ctx.errors).toEqual({ email: 'Не верный формат данных, для поля "email".' });
  });
});

// npm run test:unit validate-signup-data.test.ts
