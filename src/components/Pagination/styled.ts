import styled from 'styled-components';
import { Button, ButtonType, ButtonVariant } from 'components/Button';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const PaginationButton = styled(Button).attrs({ themeType: ButtonType.Primary, variant: ButtonVariant.Narrow })`
  display: flex;
  font-size: 26px;
  width: 100%;
  border-radius: 4px;
  transition: color 100ms ease-in-out;
  padding: 0;
  i {
    width: 100%;
    height: 100%;
    &:focus {
      outline: none;
    }
    svg {
      margin: 0;
      height: 100%;
      pointer-events: none;
      &:focus {
        outline: none;
      }
    }
  }
`;

export const PaginationText = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0 1em;
`;
