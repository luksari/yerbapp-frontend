import { getRequest } from './requests';

interface LoginResponse {
  token: string;
  userId: string;
  expDate: string;
}

interface RegisterResponse {
  expDate: string;
}

export const AuthApi = {
  /** @todo Pass proper URL endpoint */
  login: () => getRequest<LoginResponse>('/'),
  register: () => getRequest<RegisterResponse>('/'),
};
