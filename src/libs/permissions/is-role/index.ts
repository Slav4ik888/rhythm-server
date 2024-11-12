import { Role } from '../../../models/user';


type WithRole = {
  role: Role
}


/** Является ли роль пользователя Role.SUPER */
export const isRoleSuper         = (user: WithRole) => user.role === Role.SUPER;
/** Является ли роль пользователя Role.DEV */
export const isRoleDev           = (user: WithRole) => user.role === Role.DEV;
/** Является ли роль пользователя Role.OWNER */
export const isRoleOwner         = (user: WithRole) => user.role === Role.OWNER;
/** Является ли роль пользователя Role.EMPLOYEE */
export const isRoleEmployee      = (user: WithRole) => user.role === Role.EMPLOYEE;


/** НЕ является ролью Role.SUPER */
export const isNotRoleSuper      = (user: WithRole) => ! isRoleSuper(user);
/** НЕ является ролью Role.DEV */
export const isNotRoleDev        = (user: WithRole) => ! isRoleDev(user);
/** НЕ является ролью Role.OWNER */
export const isNotRoleOwner      = (user: WithRole) => ! isRoleOwner(user);
/** НЕ является ролью Role.EMPLOYEE */
export const isNotRoleEmployee   = (user: WithRole) => ! isRoleEmployee(user);
