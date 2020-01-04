import styled, { css } from 'styled-components';
import { Button } from 'components/Button';
import { Rating } from 'components/Rating';

export const CardContainer = styled.div`
  height: 490px;
  width: 620px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.metrics.margin.m};
  box-shadow: 0 10px 10px -5px ${({ theme }) => theme.colors.shadow};
  border-radius: 8px;
  overflow: hidden;
`;

export const YerbaTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 0 15px;
  margin-top: ${({ theme }) => theme.metrics.margin.m};
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
  text-align: center;
`;

export const DataWrapper = styled.div<{primary?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  * {
    z-index: 1;
  }
  padding: ${({ theme }) => theme.metrics.padding.l} ${({ theme }) => theme.metrics.padding.s};
  ${({ primary, theme }) => primary && css`
    box-shadow: 0 5px 10px -2px ${theme.colors.shadow};
    justify-content: space-between;
  `};
`;

export const Image = styled.img`
  max-width:100%;
  z-index: 0;
  top: 100px;
  height: auto;
`;


export const Description = styled.p`
  margin: 0;
  margin-top: ${({ theme }) => theme.metrics.margin.m};
  color: ${({ theme }) => theme.colors.labelText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 500;
`;

export const ValueWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding-bottom: ${({ theme }) => theme.metrics.padding.s};
  &:nth-child(3) {
    margin-bottom: ${({ theme }) => theme.metrics.margin.m};
  }
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.labelText};
  font-size: ${({ theme }) => theme.metrics.fontSize.xs};
  font-weight: 700;
`;


export const StyledValue = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.alternativeText};
  font-size: ${({ theme }) => theme.metrics.fontSize.xs};
  margin-left: 3px;
  font-weight: 600;
  padding: ${({ theme }) => theme.metrics.padding.xs};
  background: ${({ theme }) => theme.gradients.primaryToAlt};
  box-shadow: 0 5px 5px -4px ${({ theme }) => theme.colors.shadow};
  border-right: 18px solid ${({ theme }) => theme.colors.mainBackground}7e;
  max-width: 145px;
  border-radius: 4px;
`;

export const CardButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.l};
  justify-self: flex-end;
`;

export const StyledRating = styled(Rating)`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
`;
