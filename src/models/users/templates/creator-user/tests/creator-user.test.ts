import { MOCK_USER_EMPTY, MOCK_USER_EMPLOYEE } from '../../../mocks';
import { creatorUser } from '..';
import { cloneObj } from '../../../../../shared/utils/objects';



describe('creatorUser', () => {
  test('With User data', () => {
    expect(creatorUser(MOCK_USER_EMPLOYEE)).toEqual(MOCK_USER_EMPLOYEE);
  });

  test('User data id undefined', () => {
    const
      res = creatorUser(undefined),
      user = cloneObj(MOCK_USER_EMPTY);

    res.createdAt.date  = 0;
    res.lastChange.date = 0;

    user.createdAt.date    = 0;
    user.lastChange.date   = 0;
    
    expect(res).toEqual(user);
  });
});

// npm run test:unit creator-user.test.ts
