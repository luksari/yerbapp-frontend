import styled, { css } from 'styled-components';
import { Button } from 'components/Button';

export const CardContainer = styled.div`
  height: 480px;
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
  font-size: ${({ theme }) => theme.metrics.fontSize.xl};
  font-weight: 750;
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
  padding: ${({ theme }) => theme.metrics.padding.m} 0;
  ${({ primary, theme }) => primary && css`
    background: ${theme.colors.disabledBackground};
    box-shadow: 0 5px 10px -2px ${theme.colors.shadow};
    justify-content: space-between;

  `};
`;

export const Image = styled.img`
  position: absolute;
  max-width:100%;
  z-index: 0;
  top: 100px;
  height: auto;
`;


export const Description = styled.p`
  margin: 0;
  margin-top: ${({ theme }) => theme.metrics.margin.m};
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 500;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.metrics.padding.s} 0;

`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.labelText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  font-weight: 700;
`;


export const StyledValue = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: ${({ theme }) => theme.metrics.fontSize.s};
  margin-left: 3px;
  font-weight: 500;
`;

export const CardButton = styled(Button)`
  margin: ${({ theme }) => theme.metrics.margin.l};
  justify-self: flex-end;
`;
