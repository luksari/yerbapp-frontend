import styled from 'styled-components';

export const RatingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-self: center;
`;

export const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: stretch;
  grid-column-gap: 25px;
`;

export const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(690px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-gap: 45px;
`;
