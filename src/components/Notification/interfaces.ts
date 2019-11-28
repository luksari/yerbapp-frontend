// types need to match https://www.npmjs.com/package/react-notifications-component#notification-type
export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export interface NotificationPayload {
  title: string;
  message?: string;
}
