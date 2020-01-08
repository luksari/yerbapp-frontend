import styled from 'styled-components';
import { RatingWrapper, StyledFormField } from 'containeirs/Products/styled';
import { Button } from 'components/Button';
import { PaginationWrapper } from 'components/Pagination/styled';

export const CreateButton = styled(Button)``;

export const ActionWrapper = styled.div`
  background: white;
  display: grid;
  justify-items: center;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  grid-row-gap: 30px;
  background: ${({ theme }) => theme.colors.mainBackground};
  ${CreateButton} {
    order: 2;
    justify-self: flex-end;
  }
  ${RatingWrapper} {
    order: 3;
    grid-column: 2 / 2;
  }
  ${StyledFormField} {
    order: 1;
    width: 100%;
  }
  ${PaginationWrapper} {
    order: 0;
    justify-self: flex-start;
    width: 100%;
  }
`;
