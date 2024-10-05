import { RuleType } from '../../../types';
import { creatorRule, RuleConfig } from '..';
import { NEW_RULE, USER } from './mocks';
import { MOCK_USER_ID } from '../../../../users';
import { modifyFields } from '../../../../../libs/tests';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { MOCK_PARENT_ID } from '../../../../base';





describe('creatorRule', () => {
  // Base
  test('Config is undefined', () => {
    expect(creatorRule(undefined as unknown as RuleConfig)).toEqual(undefined);
  });

  test('Config is empty', () => {
    expect(creatorRule({} as unknown as RuleConfig)).toEqual(undefined);
  });

  test('ParentId is missing', () => {
    expect(creatorRule({
      user      : USER,
      lastOrder : 0
    } as unknown as RuleConfig)).toEqual(undefined);
  });

  test('CompanyId is missing', () => {
    expect(creatorRule({
      user: {
        id: MOCK_USER_ID
      },
      lastOrder : 3000,
      parentId  : ''
    } as unknown as RuleConfig)).toEqual(undefined);
  });

  test('UserId is missing', () => {
    expect(creatorRule({
      user: {
        companyId: MOCK_COMPANY_ID
      },
      lastOrder : 3000,
      parentId  : ''
    } as unknown as RuleConfig)).toEqual(undefined);
  });


  // Main

  test('With some body', () => {
    const rule = creatorRule({
      user      : USER,
      parentId  : '',
      body      : 'New body nuh',
      type      : RuleType.SIMPLE
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE,
        body  : 'New body nuh',
        order : 4000
      });
  });


  test('Config right & parentId is main', () => {
    const rule = creatorRule({
      user      : USER,
      parentId  : '',
      type      : RuleType.SIMPLE
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE,
        order: 4000
      });
  });


  test('Config right & with parentId & RuleType.DUTY', () => {
    const rule = creatorRule({
      user      : USER,
      parentId  : MOCK_PARENT_ID,
      type      : RuleType.DUTY
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE,
        parentId : MOCK_PARENT_ID,
        type     : RuleType.DUTY,
        order    : 1000
      });
  });


  test('Config right & without "type"', () => {
    const rule = creatorRule({
      user      : USER,
      parentId  : ''
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE,
        type     : RuleType.SIMPLE,
        order    : 1000
      });
  });

});


// npm run test:unit creator-rule.test.ts
