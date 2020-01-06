import styled from 'styled-components';
import { RatingWrapper, StyledFormField } from 'containeirs/Explore/styled';
import { Button } from 'components/Button';
import { PaginationWrapper } from 'components/Pagination/styled';

export const CreateButton = styled(Button)``;

export const ActionWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 350px 1fr 220px;
  grid-gap: 15px;
  background: ${({ theme }) => theme.colors.mainBackground};
  ${CreateButton} {
    order: 2;
  }
  ${RatingWrapper} {
    order: 3;
    width: 100%;
    grid-column: 2;
  }
  ${StyledFormField} {
    order: 1;
    width: 100%;
  }
  ${PaginationWrapper} {
    order: 0;
    width: 350px;
  }
`;
