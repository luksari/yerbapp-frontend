import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo.svg';


export const StyledInitial = styled.span`
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

export const LeftLogo = styled(StyledLogo)`
  left: -15px;
  top: -15px;
  transform: scale(1.1) rotate(-45deg);
`;

export const RightLogo = styled(StyledLogo)`
  transform: scale(0.8) rotate(135deg);
  right: -15px;
  bottom: -15px;
`;

export const StyledAvatar = styled.div<{code: number; avatarUrl?: string}>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  ${({ code, avatarUrl }) => css`
    background: ${avatarUrl ? `url(${avatarUrl}) center center/cover no-repeat` : `hsl(${code}, 95%, 93%)`};
    ${StyledInitial} {
      color: hsl(${code}, 25%, 55%);
      display: ${avatarUrl ? 'none' : 'block'};
    }
  `}
`;

export const AvatarWrapper = styled.div`position: relative;
  margin: 0 20px;
  width: 55px;
  height: 55px;
  font-size: 25px;
`;
