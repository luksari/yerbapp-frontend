import { UserRoles } from './types';

export const isAdmin = (role: UserRoles) => role === UserRoles.Admin;
