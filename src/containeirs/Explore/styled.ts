import styled from 'styled-components';
import { FormField } from 'components/Form/components/FormField';

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: center;
`;

export const StyledFormField = styled(FormField)`

`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(690px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-gap: 45px;
`;
