import styled from 'styled-components';
import { LeftLogo, RightLogo } from 'components/UserAvatar/styled';
import { FormikUserAvatar } from 'components/UserAvatar/FormikUserAvatar';

export const BigUserAvatar = styled(FormikUserAvatar)`
  margin: ${({ theme }) => theme.metrics.margin.xl} 0;
  justify-self: center;
  width: 200px;
  height: 200px;
  font-size: 110px;
  ${LeftLogo}{
    left: -60px;
    top: -60px;
  }
  ${RightLogo}{
    right: -60px;
    bottom: -60px;
  }
`;
