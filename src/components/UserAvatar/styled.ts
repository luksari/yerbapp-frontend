import styled, { css } from 'styled-components';

export const StyledInitial = styled.span`
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const StyledAvatar = styled.div<{code: number}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  ${({ code }) => css`
    background: hsl(${code}, 95%, 93%);
    ${StyledInitial} {
      color: hsl(${code}, 25%, 55%);
    }
  `}
`;

export const AvatarWrapper = styled.div`position: relative;
  margin-right: 10px;
  width: 55px;
  height: 55px;
  font-size: 25px;
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
  &::after, &::before {
    content: url('/assets/logo.svg');
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;
