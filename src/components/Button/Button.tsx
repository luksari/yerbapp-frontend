import React, { FC, ReactElement, MouseEvent } from 'react';
import { ButtonBox } from './styled';
import { ButtonType, IconPosition } from './types';


interface ButtonProps {
  onClick: (e: MouseEvent) => void;
  text?: string;
  themeType?: ButtonType;
  disabled?: boolean;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  className?: string;
}
type AllButtonProps = ButtonProps & React.HTMLProps<HTMLButtonElement>

export const Button: FC<AllButtonProps> = ({
  onClick,
  icon,
  disabled = false,
  themeType = ButtonType.Primary,
  iconPosition = IconPosition.Left,
  children,
  className,
}) => (
  <ButtonBox
    themeType={themeType}
    onClick={onClick}
    disabled={disabled}
    iconPosition={iconPosition}
    className={className}
  >
    {icon}
    {children}
  </ButtonBox>
);