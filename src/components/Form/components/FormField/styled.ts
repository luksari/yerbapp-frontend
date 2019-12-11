import styled, { css, DefaultTheme } from 'styled-components';

interface WrapperProps {
  fullWidth?: boolean;
}

export const InputWrapper = styled.div<WrapperProps>`
  display: flex;
  max-width: ${({ fullWidth }) => fullWidth ? '100%' : '40%'};
  flex-direction: column;
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.metrics.fontSize.xs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.labelText};
  margin-bottom: 9px;
`;

interface InputMessageProps {
  touched?: boolean;
  error?: string;
  warning?: string;
}

export const setColor = ({ theme, error }: {theme: DefaultTheme; error?: string}) => {
  if (error) {
    return theme.colors.danger;
  }

  return null;
};


export const AdditionalText = styled.span<InputMessageProps>`
  color: ${({ theme, error }) => setColor({ theme, error })};
`;

export const baseInputStyles = css`
  background: ${({ theme }) => theme.colors.disabledBackground};
  border-radius: 4px;
  box-shadow: 0 2px 10px -5px ${({ theme }) => theme.colors.shadow};
  min-height: 35px;
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  line-height: 16px;
  padding: 10px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryText};
  border: 1px solid transparent;
  outline: 0;
  transition: border-color 0.2s ease-in-out;
  &:disabled {
    color: ${({ theme }) => theme.colors.disabledText};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.info};
  }
  &:placeholder {
    color: ${({ theme }) => theme.colors.disabledText};
  }
`;

export const errorBorderStyles = ({ theme, touched, error }) => touched && error && css`
  border-color: ${setColor({ theme, error })};
    &:invalid {
      color: ${setColor({ theme, error })}
    }
    `;
