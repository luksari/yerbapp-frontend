import { ReactComponent as Logo } from 'assets/logo.svg';
import styled from 'styled-components';
import Rating from 'react-rating';

export const FullSymbol = styled(Logo)`
  width: 40px;
  height: 40px;
  pointer-events: none;
  padding: 2px;

`;

export const EmptySymbol = styled(FullSymbol)`
  filter: grayscale(100%) brightness(135%);
`;

export const StyledRating = styled(Rating)`
  display: flex !important;
  align-items: center;
  span {
    max-width: 40px;
    max-height: 40px;
    transition: all 0.1s linear;
    &:hover {
      transform: scale(1.05);
    }
  }

`;
