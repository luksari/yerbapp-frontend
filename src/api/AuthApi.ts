import { postRequest } from './requests';

interface LoginResponse {
  token: string;
  userId: string;
  expDate: string;
}

interface RegisterResponse {
  expDate: string;
}

interface RegisterBody {
  username: string;
  password: string;
  email: string;
}

interface LoginBody {
  username: string;
  password: string;
}

export const AuthApi = {
  login: (paylaod: LoginBody) => postRequest<LoginResponse>('/auth/login', paylaod),
  register: (payload: RegisterBody) => postRequest<RegisterResponse>('/auth/register', payload),
};
