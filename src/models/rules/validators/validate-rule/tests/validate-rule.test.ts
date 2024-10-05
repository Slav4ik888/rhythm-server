import { validateRule } from '..';
import { Context } from '../../../../../app/types/global';
import { CtxClass } from '../../../../../libs/tests';
import { createArr } from '../../../../../shared/utils/arrays';
import { cloneObj } from '../../../../../shared/utils/objects';
import { getMockStrLength } from '../../../../../shared/utils/strings';
import { MOCK_PARENT_ID } from '../../../../base';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { MOCK_POSITION_ID, MOCK_USER_ID, User } from '../../../../users';
import { creatorRule } from '../../../creators';
import { Rule, RuleType } from '../../../types';



const MOCK_USER = {
  id        : MOCK_USER_ID,
  companyId : MOCK_COMPANY_ID
} as User;


const MOCK_RULE = creatorRule({
  user      : MOCK_USER,
  lastOrder : 0,
  parentId  : MOCK_PARENT_ID,
  type      : RuleType.DUTY,
  body      : getMockStrLength(10000000)
});



describe('Validator rule', () => {
  it('Valid with required data, with parentId = "" ', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule = cloneObj(MOCK_RULE);
    
    rule.parentId = '';

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });
  

  it('Without body', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule = cloneObj(MOCK_RULE);
    
    delete rule.body;

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });


  it('All data in rule is empty & label is long', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context;

    validateRule(ctx, { label: getMockStrLength(51) } as Rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      id        : "Отсутствует обязательное поле \"id\".",
      label     : "Поле \"Заголовок\" не должно быть больше 50 символов.",
      companyId : "Отсутствует обязательное поле \"companyId\"."
    });
  });

  it('Label is no string & parentId is long', () => {    
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule: Rule = cloneObj(MOCK_RULE);

    rule.label = 123 as unknown as string;
    rule.parentId = getMockStrLength(31);

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      parentId : "Не соответствует допустимым значениям, для поля \"parentId\".",
      label    : "Не верный формат данных, для поля \"Заголовок\"."
    });
  });

  it('Label is empty', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule = cloneObj(MOCK_RULE);
    
    rule.label = '';

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });

  it('Body is too long', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule: Rule = cloneObj(MOCK_RULE);

    rule.body = getMockStrLength(10000001);

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      body : "Поле \"body\" не должно быть больше 10000000 символов."
    });
  });


  it('Invalid type', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule: Rule = cloneObj(MOCK_RULE);

    rule.type = 'Some type' as RuleType;

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      type : "Поле \"type\" не является одним из допустимых значений."
    });
  });


  it('Executors = maxItems', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule = cloneObj(MOCK_RULE);
    
    rule.executors = createArr(100, MOCK_POSITION_ID);

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(0);
    expect(ctx.status).toBe(200);
    expect(ctx.errors).toEqual({});
  });

  it('Executors > maxItems', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule: Rule = cloneObj(MOCK_RULE);

    rule.executors = createArr(101, MOCK_POSITION_ID);

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      executors: "Массив \"executors\" не должен быть больше 100 элементов."
    });
  });

  it('Executors with invalid Items', () => {
    const
      mockFn = jest.fn(),
      ctx = new CtxClass(mockFn) as unknown as Context,
      rule: Rule = cloneObj(MOCK_RULE);

    rule.executors = [
      MOCK_POSITION_ID + 'A',
      {} as unknown as string,
      [] as unknown as string,
      true as unknown as string,
      false as unknown as string
    ];

    validateRule(ctx, rule);
    expect(mockFn).toBeCalledTimes(1);
    expect(ctx.status).toBe(400);
    expect(ctx.errors).toEqual({
      0: "Поле \"0\" не должно быть больше 20 символов.",
      1: "Не верный формат данных, для поля \"1\".",
      2: "Не верный формат данных, для поля \"2\".",
      3: "Не верный формат данных, для поля \"3\".",
      4: "Не верный формат данных, для поля \"4\"."
    });
  });
});

// npm run test:unit validate-rule.test.ts
