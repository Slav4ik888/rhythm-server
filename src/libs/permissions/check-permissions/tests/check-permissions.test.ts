import { checkPermissions } from '..';
import { CtxClass } from '../../../tests';
import { Role } from '../../../../models/users';
import { ERROR_NAME, getErrorText } from '../../../validators';
import { Context } from '../../../../app/types/global';
import { creatorCompany, MOCK_OWNER_ID, MOCK_COMPANY_ID } from '../../../../models';



describe('checkPermissions', () => {

  // ------- SCHEME undefined ---------------------------------

  it('Scheme is undefined', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      REQ_USER = { id: '123', companyId: 'C123', role: Role.EMPLOYEE };

    const res = checkPermissions(ctx, undefined, REQ_USER);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(403);
    expect(ctx.errors).toEqual({ general: getErrorText(ERROR_NAME.PERMISSONS_UNKNOWN) });
    expect(res).toBe(undefined);
  });


  // ------- SCHEME companyAccount.delete ---------------------------------


  it('Valid for companyAccount.delete reqUser=Owner=targetCompany', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      REQ_USER = {
        id        : MOCK_OWNER_ID,
        companyId : MOCK_COMPANY_ID,
        role      : Role.OWNER
      },
      TARGET_COMPANY = creatorCompany({ id: MOCK_COMPANY_ID, ownerId: MOCK_OWNER_ID });

    const res = checkPermissions(ctx, 'companyAccount.delete', REQ_USER, TARGET_COMPANY);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
    expect(res).toBe(true);
  });


  it('Invalid for companyAccount.delete reqUser is Employee', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      REQ_USER = {
        id        : MOCK_OWNER_ID,
        companyId : MOCK_COMPANY_ID,
        role      : Role.EMPLOYEE
      },
      TARGET_COMPANY = creatorCompany({ id: MOCK_COMPANY_ID, ownerId: MOCK_OWNER_ID });

    const res = checkPermissions(ctx, 'companyAccount.delete', REQ_USER, TARGET_COMPANY);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(403);
    expect(ctx.errors).toEqual({ general: getErrorText(ERROR_NAME.PERMISSONS_NOT_ALLOWED) });
    expect(res).toBe(undefined);
  });


  it('Invalid for companyAccount.delete reqUser not Company Owner', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      REQ_USER = {
        id        : MOCK_OWNER_ID,
        companyId : 'any company id',
        role      : Role.OWNER
      },
      TARGET_COMPANY = creatorCompany({ id: MOCK_COMPANY_ID, ownerId: MOCK_OWNER_ID });

    const res = checkPermissions(ctx, 'companyAccount.delete', REQ_USER, TARGET_COMPANY);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(403);
    expect(ctx.errors).toEqual({ general: getErrorText(ERROR_NAME.PERMISSONS_NOT_ALLOWED) });
    expect(res).toBe(undefined);
  });

  // ------- SCHEME ---------------------------------

});

// npm run test:unit check-permissions.test.ts
