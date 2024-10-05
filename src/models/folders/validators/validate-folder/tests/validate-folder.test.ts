import { validateFolder } from '..';
import { Context } from '../../../../../app/types/global';
import { CtxClass } from '../../../../../libs/tests';
import { MOCK_FOLDER_EMPTY_WITH_PARENT } from '../../../mocks';
import { Folder } from '../../../types';


describe('validateFolder', () => {
  it('Valid with required data', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context;
    
    validateFolder(ctx, MOCK_FOLDER_EMPTY_WITH_PARENT);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });

  it('Invalid with required data', () => {
    const
      mockFn = jest.fn(),
      ctx    = new CtxClass(mockFn) as unknown as Context;
      
    validateFolder(ctx, {} as Folder);

    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toEqual(400);
    expect(ctx.errors).toEqual({
      id        : "Отсутствует обязательное поле \"id\"."
    });
  });
});


// npm run test:unit validate-folder.test.ts
