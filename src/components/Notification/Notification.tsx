import React, { FC } from 'react';
import { NotificationType } from 'components/Notification/interfaces';
import {
  Wrapper, Title, Message, Decorator,
} from 'components/Notification/styled';

interface Props {
  title: string;
  message?: string;
  type: NotificationType;
}

const getTypeIcon = (type: NotificationType) => {
  switch (type) {
  case NotificationType.Success: return 'check-circle';
  case NotificationType.Error: return 'close-circle';
  case NotificationType.Info: return 'info-circle';
  case NotificationType.Warning: return 'warning';
  default: return 'stop';
  }
};

export const Notification: FC<Props> = ({ message, title, type }) => (
  <Wrapper notificationType={type}>
    <Title>{title}</Title>
    <Message>{message}</Message>
    <Decorator type={getTypeIcon(type)} />
  </Wrapper>
);
