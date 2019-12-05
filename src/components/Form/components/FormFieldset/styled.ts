import styled from 'styled-components';

export const StyledFieldset = styled.fieldset<{ fullWidth?: boolean }>`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.decorators};
  width: auto;
  margin: 0;
  padding: 0;
`;

export const StyledLegend = styled.h3`
  margin-top: 19px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
`;
