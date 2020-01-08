import styled from 'styled-components';
import { FormField } from 'components/Form/components/FormField';

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const StyledFormField = styled(FormField)`

`;

export const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(690px, 1fr));
  align-items: center;
  justify-items: center;
  grid-gap: 45px;
`;
