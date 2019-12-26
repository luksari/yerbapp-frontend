
export enum AsyncStatus {
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
  Unset = 'unset'
}

export interface DatedMessage {
  body: string;
  time: Date;
}

export interface SelectableItem {
  value: string | number;
  label: string;
}

export interface ErrorMessage<T> {
  children: any[];
  constraints: Record<string, any>;
  property: string;
  target: T;
  value: string;
}
export interface ErrorResponse<T> {
  statusCode: number;
  error: string;
  message: ErrorMessage<T>[];
}

export interface ErrorModel<T> {
  statusText: string;
  response: ErrorResponse<T>;
  status: number;
}

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user'
}

export interface FormProps<T> {
  data: T;
  isLoading: boolean;
  onSubmit: (values: T) => void;
  handleBack: VoidFunction;
  isSaving: boolean;
  iEdit?: boolean;
}
