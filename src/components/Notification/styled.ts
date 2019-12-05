import styled, { createGlobalStyle, keyframes, DefaultTheme } from 'styled-components';
import { NotificationType } from 'components/Notification/interfaces';
import { Icon } from 'antd';


const getTypeColor = ({ theme, notificationType }: { theme: DefaultTheme; notificationType: NotificationType }) => {
  switch (notificationType) {
  case NotificationType.Error: return theme.colors.danger;
  case NotificationType.Success: return theme.colors.primary;
  case NotificationType.Info: return theme.colors.decorators;
  case NotificationType.Warning: return theme.colors.warning;
  default: return theme.colors.decorators;
  }
};

const animateOut = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;

const animateIn = keyframes`
  0% {
    clip-path: circle(13px at calc(100% - 26px) calc(100% - 26px));
    transform: scale(0.3);
    opacity: 0;
  }

  30% {
    opacity: 1;
    transform: scale(1.5);
  }

  60% {
    clip-path: circle(13px at calc(100% - 26px) calc(100% - 26px));
    transform: scale(1);
  }

  100% {
    clip-path: circle(360px at calc(100% - 26px) calc(100% - 26px));
  }
`;

export const NotificationGlobalStyles = createGlobalStyle`
  .notification-item.animation-out {
    animation: ${animateOut} 250ms ease-in forwards;
  }

  .notification-item.animation-in {
    animation: ${animateIn} 500ms ease-in-out forwards;
    transform-origin: calc(100% - 26px) calc(100% - 26px);
  }

  .notification-item {
    box-shadow: none !important;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  margin-bottom: 1em;
`;

export const Message = styled.div`
  color: ${({ theme }) => theme.colors.labelText};
`;

export const Decorator = styled(Icon)`
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 28px;
  line-height: 28px;
  width: 28px;
  height: 28px;
  border-radius: 50%
`;


export const Wrapper = styled.div<{ notificationType: NotificationType }>`
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.colors.mainBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 13px;
  padding: 1em 48px 1em 1.5em;
  border-radius: 4px;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, .2);
  border-right: 3px solid ${getTypeColor};

  ${Decorator} {
    color: ${getTypeColor};
  }
`;
