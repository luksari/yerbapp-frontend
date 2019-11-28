
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
