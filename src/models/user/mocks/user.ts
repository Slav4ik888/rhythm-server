import { creatorFixDate } from '../../base';
import { cloneObj } from '../../../shared/utils/objects';
import { Role, User, UserStatus } from '../types';
import { MOCK_PERSON, MOCK_PERSON_EMPTY } from './person';
import { MOCK_COMPANY_ID } from '../../company';



export const MOCK_USER_ID = 'FmyRl2ZALlMSZTloX9JXFPrMB303';


export const MOCK_USER_EMPTY: User = {
  id            : '',
  companyId     : '',

  person        : cloneObj(MOCK_PERSON_EMPTY),
  email         : '',
  permissions   : false,

  role          : Role.EMPLOYEE,
  emailVerified : false,
  status        : UserStatus.NEW,
  order         : 100,

  createdAt     : creatorFixDate(),
  lastChange    : creatorFixDate()
};


export const MOCK_USER_EMPLOYEE: User = {
  id            : MOCK_USER_ID,
  companyId     : MOCK_COMPANY_ID,

  person        : cloneObj(MOCK_PERSON),
  email         : 'korzan.va@mail.ru',
  permissions   : false,

  role          : Role.EMPLOYEE,
  emailVerified : false,
  status        : UserStatus.NEW,
  order         : 100,
  
  createdAt     : creatorFixDate(MOCK_USER_ID),
  lastChange    : creatorFixDate(MOCK_USER_ID)
};
