import { getRuleTitleFields } from '..';
import { modifyFields } from '../../../../../libs/tests';
import { MOCK_FIX_DATE, MOCK_ID_1, MOCK_PARENT_ID } from '../../../../base';
import { MOCK_COMPANY_ID } from '../../../../companies';
import { PartialRule, creatorRule } from '../../../../rules';
import { NEW_RULE_TITLE, USER } from './mocks';



describe('getRuleTitleFields', () => {

  test('With required fileds only', () => {
    const rule = {
      id          : MOCK_ID_1,
      companyId   : MOCK_COMPANY_ID, 
      parentId    : MOCK_PARENT_ID,
      lastChange  : MOCK_FIX_DATE
    } as PartialRule;

    expect(getRuleTitleFields(rule)).toEqual(rule);
  });


  test('With full Rule', () => {
    const rule = creatorRule({
      user      : USER,
      lastOrder : 3000,
      parentId  : ''
    });

    const ruleTitle = {
      id         : rule.id,
      companyId  : rule.companyId, 
      parentId   : rule.parentId,
      condition  : rule.condition,
      label      : rule.label,
      order      : rule.order,
      createdAt  : rule.createdAt,
      lastChange : rule.lastChange
    };

    expect(modifyFields(getRuleTitleFields(rule))).toEqual(modifyFields(ruleTitle));
  });
});


// npm run test:unit get-rule-title-fields.test.ts
