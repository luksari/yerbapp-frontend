import styled from 'styled-components';
import { UserAvatar } from 'components/UserAvatar';

export const BigUserAvatar = styled(UserAvatar)`
  margin: ${({ theme }) => theme.metrics.margin.xl} 0;
  justify-self: center;
  width: 200px;
  height: 200px;
  font-size: 110px;
  &::before{
    left: -60px;
    top: -60px;
  }
  &::after{
    right: -60px;
    bottom: -60px;
  }
`;
