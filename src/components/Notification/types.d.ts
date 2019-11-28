declare module 'react-notifications-component' {
  interface Transition {
    duration: number;
    timingFunction?: string;
    delay?: number;
  }

  interface AddNotificationPayloadCommon {
    container: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    insert?: 'top' | 'bottom';
    animationIn?: string[];
    animationOut?: string[];
    width?: number;
    dismiss?: {
      duration: number;
      waitForAnimation?: boolean;
    };
    slidingEnter?: Transition;
    slidingExit?: Transition;
  }

  interface AddNotificationPayloadWithContent extends AddNotificationPayloadCommon {
    content: React.Component | React.FunctionComponent | React.ReactElement | null;
  }

  interface AddNotificationPayloadWithoutContent extends AddNotificationPayloadCommon {
    title: string;
    message: string;
    type: string;
  }

  type AddNotificationPayload = AddNotificationPayloadWithContent | AddNotificationPayloadWithoutContent;

  interface Store {
    addNotification: (payload: AddNotificationPayload) => string;
    removeNotification: (id: string) => void;
  }

  interface Props {
    isMobile?: boolean;
    breakpoint?: number;
    types?: string[];
    onNotificationRemoval?: (id: string, removedBy: any) => void;
  }

  const ReactNotifications: React.FC<Props>;

  export default ReactNotifications;
  export const store: Store;
}
