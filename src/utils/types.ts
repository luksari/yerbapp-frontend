
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
  value: string;
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
  Admin = 'admin',
  User = 'user'
}

export interface TableProps<T> {
  data: T[];
  isLoading?: boolean;
  onEdit?: (id: string | number) => void;
  onDelete: (id: string | number) => void;
  handleSort: (columnId: string, order: string) => void;
}

type FormData<T> = Partial<Omit<T, '__typename'>>
export interface FormProps<T, K = T> {
  data: FormData<T>;
  isLoading?: boolean;
  onSubmit: (values: FormData<T>) => void;
  handleBack: VoidFunction;
  isSaving: boolean;
  isEdit?: boolean;
  title?: string;
  subTitle?: string;
}
