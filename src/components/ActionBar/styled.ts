import styled from 'styled-components';
import { RatingWrapper, StyledFormField } from 'containeirs/Explore/styled';
import { Button } from 'components/Button';

export const CreateButton = styled(Button)``;

export const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  ${CreateButton} {
    order: 3;
  }
  ${RatingWrapper} {
    order: 2;
  }
  ${StyledFormField} {
    order: 4;
    width: 100%;
  }
`;
