import { store } from 'react-notifications-component';
import { NotificationType, NotificationPayload } from 'components/Notification/interfaces';
import { Notification } from 'components/Notification/Notification';

const getDismissTime = (type: NotificationType) => {
  switch (type) {
  case NotificationType.Error: return 5000;
  case NotificationType.Success: return 2500;
  case NotificationType.Info: return 3500;
  case NotificationType.Warning: return 5000;
  default: return 2500;
  }
};

export const notification = (type: NotificationType) => ({ title, message }: NotificationPayload) => store.addNotification({
  type,
  container: 'bottom-right',
  content: Notification({ title, message, type }),
  animationIn: ['animation-in'],
  animationOut: ['animation-out'],
  width: 360,
  dismiss: {
    duration: getDismissTime(type),
    waitForAnimation: true,
  },
  slidingEnter: {
    duration: 100,
  },
  slidingExit: {
    duration: 100,
  },
});

export const notificationSuccess = notification(NotificationType.Success);
export const notificationError = notification(NotificationType.Error);
export const notificationWarning = notification(NotificationType.Warning);
export const notificationInfo = notification(NotificationType.Info);

export const clearNotification = (id: string) => store.removeNotification(id);
