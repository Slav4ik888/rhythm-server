import { Role } from '../../../models/users';


type WithRole = {
  role: Role
}


/** Является ли роль пользователя Role.SUPER */
export const isRoleSuper         = (user: WithRole) => user.role === Role.SUPER;
/** Является ли роль пользователя Role.DEV */
export const isRoleDev           = (user: WithRole) => user.role === Role.DEV;
/** Является ли роль пользователя Role.OWNER */
export const isRoleOwner         = (user: WithRole) => user.role === Role.OWNER;
/** Является ли роль пользователя Role.SUPERVISOR */
export const isRoleSupervisor    = (user: WithRole) => user.role === Role.SUPERVISOR;
/** Является ли роль пользователя Role.EMPLOYEE */
export const isRoleEmployee      = (user: WithRole) => user.role === Role.EMPLOYEE;


/** НЕ является ролью Role.SUPER */
export const isNotRoleSuper      = (user: WithRole) => ! isRoleSuper(user);
/** НЕ является ролью Role.DEV */
export const isNotRoleDev        = (user: WithRole) => ! isRoleDev(user);
/** НЕ является ролью Role.OWNER */
export const isNotRoleOwner      = (user: WithRole) => ! isRoleOwner(user);
/** НЕ является ролью Role.SUPERVISOR */
export const isNotRoleSupervisor = (user: WithRole) => ! isRoleSupervisor(user);
/** НЕ является ролью Role.EMPLOYEE */
export const isNotRoleEmployee   = (user: WithRole) => ! isRoleEmployee(user);



// /** Является ли запроситель Владельцем по uid; */
// export const isOwner           = (reqUser: WithUserId, ownerId: string)   => reqUser.userId === ownerId;
// /** Является ли пользователь тем о ком запрашиваются данные */
// export const isThisUser        = (reqUser: UserIdWithRole, userId: string)    => reqUser.userId === userId;
// /** Запрашиваемая компания является компанией пользователя */
// export const isThisCompanyId   = (reqUser: ReqUser, companyId: string) => reqUser.companyId === companyId;
// /** НЕ является ли запроситель Владельцем по uid; */
// export const isNoOwner         = (reqUser: UserIdWithRole, ownerId: string)   => !isOwner(reqUser, ownerId);
// /** Возвращает НЕ является ли пользователь тем о ком запрашиваются данные */
// export const isNoThisUser      = (reqUser: UserIdWithRole, userId: string)    => !isThisUser(reqUser, userId);
// /** Запрашиваемая компания НЕ является компанией пользователя */
// export const isNoThisCompanyId = (reqUser: ReqUser, companyId: string) => !isThisCompanyId(reqUser, companyId);
    
