import { getValidResult, SCHEMA_NAME, validate } from '../../../../../../libs/validators';
import { createArr } from '../../../../../../shared/utils/arrays';
import { cloneObj } from '../../../../../../shared/utils/objects';
import { getMockStrLength } from '../../../../../../shared/utils/strings';
import { MOCK_PARENT_ID } from '../../../../../base';
import { MOCK_COMPANY_ID } from '../../../../../companies';
import { MOCK_POSITION_ID, MOCK_USER_ID, User } from '../../../../../users';
import { creatorRule } from '../../../../creators';
import { Rule, RuleType } from '../../../../types';


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
  it('All data in rule right', () => {
    const rule = cloneObj(MOCK_RULE);
    rule.parentId = '';

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual(getValidResult())
  });

  it('Without body', () => {
    const rule = cloneObj(MOCK_RULE);
    delete rule.body;

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual(getValidResult())
  });


  it('All data in rule is empty & label is long', () => {
    expect(validate(SCHEMA_NAME.RULE, { label: getMockStrLength(51) })).toEqual({
      errors: {
        id        : "Отсутствует обязательное поле \"id\".",
        label     : "Поле \"Заголовок\" не должно быть больше 50 символов.",
        companyId : "Отсутствует обязательное поле \"companyId\"."
      }, valid: false
    });
  });

  it('Label is no string & parentId is long', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.label = 123 as unknown as string;
    rule.parentId = getMockStrLength(31);
    
    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual({
      errors: {
        parentId : "Не соответствует допустимым значениям, для поля \"parentId\".",
        label    : "Не верный формат данных, для поля \"Заголовок\"."
      }, valid: false
    });
  });

  it('Label is empty', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.label = '';

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual(getValidResult());
  });

  it('Body is too long', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.body = getMockStrLength(10000001);

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual({
      errors: {
        body : "Поле \"body\" не должно быть больше 10000000 символов.",
      }, valid: false
    });
  });

  it('Invalid type', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.type = 'Some type' as RuleType;
    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual({
      errors: {
        type : "Поле \"type\" не является одним из допустимых значений."
      }, valid: false
    });
  });

  it('Executors = maxItems', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.executors = createArr(100, MOCK_POSITION_ID);

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual(getValidResult());
  });

  it('Executors > maxItems', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.executors = createArr(101, MOCK_POSITION_ID);

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual({
      errors: {
        executors: "Массив \"executors\" не должен быть больше 100 элементов."
      }, valid: false
    });
  });

  it('Executors with invalid Items', () => {
    const rule: Rule = cloneObj(MOCK_RULE);
    rule.executors = [
      MOCK_POSITION_ID + 'A',
      {} as unknown as string,
      [] as unknown as string,
      true as unknown as string,
      false as unknown as string
    ];

    expect(validate(SCHEMA_NAME.RULE, rule)).toEqual({
      errors: {
        0: "Поле \"0\" не должно быть больше 20 символов.",
        1: "Не верный формат данных, для поля \"1\".",
        2: "Не верный формат данных, для поля \"2\".",
        3: "Не верный формат данных, для поля \"3\".",
        4: "Не верный формат данных, для поля \"4\"."
      }, valid: false
    });
  });
});

// npm run test:unit validate-rule-schema.test.ts
