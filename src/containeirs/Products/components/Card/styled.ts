import styled, { css } from 'styled-components';
import { Button } from 'components/Button';
import { Rating } from 'components/Rating';

export const CardContainer = styled.div`
  height: 490px;
  width: 620px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.metrics.margin.m};
  box-shadow: 0 6px 10px -5px ${({ theme }) => theme.colors.shadow};
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  border-top: 3px solid ${({ theme }) => theme.colors.alternative};
  position: relative;
`;

export const YerbaTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  font-weight: 700;
  line-height: 35px;
  text-transform: uppercase;
  background: #ffffffaa;
  width: 100%;
  margin-bottom: 0;
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
  padding: ${({ theme }) => theme.metrics.padding.l} 0;
  ${({ primary }) => primary && css`
    justify-content: space-between;
  `};
`;

export const Image = styled.img`
  position: absolute;
  width:80%;
  z-index: 0;
  top: 100px;
  height: auto;
`;


export const Description = styled.p`
  margin: 0;
  margin: ${({ theme }) => theme.metrics.margin.m} 0;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 500;
  max-width: 282px;
  height: 85px;
  overflow-wrap: break-word;
`;

export const DetailsDescription = styled(Description)`
  font-size: ${({ theme }) => theme.metrics.fontSize.m};
  max-width: 100%;
  width: 100%;
`;


export const ValueWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-bottom: ${({ theme }) => theme.metrics.padding.s};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.labelText};
  font-size: ${({ theme }) => theme.metrics.fontSize.xs};
  font-weight: 700;
`;


export const StyledValue = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 600;
`;

export const CardButton = styled(Button)`
  justify-self: center;
  align-self: center;
`;

export const StyledRating = styled(Rating)`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
`;

export const ActionButtons = styled.div<{ isAllowed: boolean}>`
  position: absolute;
  z-index: 10;
  justify-content: space-between;
  width: 80px;
  top: 10px;
  right: 10px;
  display: ${({ isAllowed }) => isAllowed ? 'flex' : 'none'};
`;

export const RoundedButton = styled(Button)`
  max-width: 35px;
  max-height: 35px;
  border-radius: 50%;
  min-width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0;

  }
`;

export const AuthorLabel = styled.p`
  margin-bottom: auto;
  justify-self: flex-start;
  align-self: flex-start;
  font-weight: 700;
  background: #ffffffaa;
  width: 100%;
`;
