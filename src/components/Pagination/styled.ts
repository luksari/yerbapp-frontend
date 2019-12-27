import styled, { css } from 'styled-components';
import { Button } from 'components/Button';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  flex-shrink: 0;
`;

export const PaginationButton = styled(Button)`
  display: flex;
  font-size: 26px;
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

  ${({ theme }) => css`
    background: ${theme.colors.info};
    color: ${theme.colors.alternativeText};

    &:hover, &:focus {
      background: ${theme.colors.infoHover};
      color: ${theme.colors.alternativeText};
    }
  `}

  ${({ theme }) => css`
    &[disabled] {
      background: ${theme.colors.disabledBackground};
      color: ${theme.colors.disabledText};
    }
  `}
`;

export const PaginationText = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0 1em;
`;
