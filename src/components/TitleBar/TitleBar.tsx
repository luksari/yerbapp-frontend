import React, { createRef, memo, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { TitleBarWrapper, TitleBarTitle } from './styled';

const titleBarTitleRef = createRef<HTMLHeadingElement>();

const TitleBarComponent: React.FunctionComponent = () => (
  <TitleBarWrapper>
    <TitleBarTitle ref={titleBarTitleRef} />
  </TitleBarWrapper>
);

export const TitleBar = memo(TitleBarComponent);

/**
 * Use title component to place title on the top bar
 * @example
 * ```tsx
 * <Title>Some heading</Title>
 * ```
 */
interface TitleProps {
  children: ReactNode;
}
const TitleComponent: React.FunctionComponent<TitleProps> = ({ children }) => {
  const container = titleBarTitleRef.current;

  if (container) {
    return createPortal(children, container);
  }

  return null;
};

export const Title = memo(TitleComponent);
