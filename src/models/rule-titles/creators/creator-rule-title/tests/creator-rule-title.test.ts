import { creatorRuleTitle, RuleTitleConfig } from '..';
import { modifyFields } from '../../../../../libs/tests';
import { MOCK_PARENT_ID } from '../../../../base';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { MOCK_USER_ID } from '../../../../users';
import { NEW_RULE_TITLE, USER } from './mocks';



describe('creatorRuleTitle', () => {

  // INVALID DATA

  test('Config is undefined', () => {
    expect(creatorRuleTitle(undefined as unknown as RuleTitleConfig)).toEqual(undefined);
  });


  test('Config is empty', () => {
    expect(creatorRuleTitle({} as unknown as RuleTitleConfig)).toEqual(undefined);
  });


  test('CompanyId is missing', () => {
    expect(creatorRuleTitle({
      user: {
        id: MOCK_USER_ID
      },
      lastOrder : 3000,
      parentId  : ''
    } as unknown as RuleTitleConfig)).toEqual(undefined);
  });


  test('UserId is missing', () => {
    expect(creatorRuleTitle({
      user: {
        companyId: MOCK_COMPANY_ID
      },
      lastOrder : 3000,
      parentId  : ''
    } as unknown as RuleTitleConfig)).toEqual(undefined);
  });


  // VALID DATA

  test('ParentId is missing', () => {
    const rule = creatorRuleTitle({
      user      : USER,
      lastOrder : 0
    });

    expect(modifyFields(rule)).toEqual(NEW_RULE_TITLE);
  });


  test('Without id & parentId is main', () => {
    const rule = creatorRuleTitle({
      user      : USER,
      lastOrder : 3000,
      parentId  : ''
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE_TITLE,
        order: 4000
      });
  });

  test('With id & parentId', () => {
    const rule = creatorRuleTitle({
      id        : 'asjDJdsdl2sbax02dasf',
      user      : USER,
      lastOrder : 3000,
      parentId  : MOCK_PARENT_ID
    });

    expect(modifyFields(rule))
      .toEqual({
        ...NEW_RULE_TITLE,
        id        : 'asjDJdsdl2sbax02dasf',
        parentId  : MOCK_PARENT_ID,
        order     : 4000
      });
  });
});


// npm run test:unit creator-rule-title.test.ts
