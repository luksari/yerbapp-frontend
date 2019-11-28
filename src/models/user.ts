export enum UserRole {
  Admin = 'admin',
  Guest = 'guest',
  Moderator = 'moderator',
  Basic = 'basic'
}

export interface UserModel {
  login: string;
  email: string;
  role: UserRole;
}
