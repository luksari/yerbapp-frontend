import styled, { css } from 'styled-components';

export const StyledInitial = styled.span`
  font-weight: 700;
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const StyledAvatar = styled.div<{code: number}>`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  z-index: 1;
  ${({ code }) => css`
    background: hsl(${code}, 95%, 93%);
    ${StyledInitial} {
      color: hsl(${code}, 25%, 55%);
    }
  `}
`;

export const AvatarWrapper = styled.div`
margin-right: ${({ theme }) => theme.metrics.margin.l};
position: relative;
  &::after, &::before {
    content: url('/assets/logo.svg');
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  &::before {
    left: -15px;
    top: -15px;
    transform: scale(1.1) rotate(-45deg);
  }
  &::after {
    transform: scale(0.8) rotate(135deg);
    right: -15px;
    bottom: -15px;
  }
`;
