import { postRequest } from './requests';

export interface LoginResponse {
  access_token: string;
  user_id: string;
}

export interface RegisterResponse {
  exp_date: string;
}

export interface RegisterBody {
  username: string;
  password: string;
  email: string;
}

export interface LoginBody {
  username: string;
  password: string;
}

export const AuthApi = {
  login: (paylaod: LoginBody) => postRequest<LoginResponse>('/auth/login', paylaod),
  register: (payload: RegisterBody) => postRequest<RegisterResponse>('/auth/register', payload),
};
