import styled, { css } from 'styled-components';
import { StyledLoader, StyledAltLoader } from 'components/Loader/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBackground};
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    background: ${theme.colors.primary};
    align-items: center;
    justify-content: center;
  `}
`;

export const NoMatchLoader = styled(StyledLoader)`
  width: 350px;
  height: 350px;
`;

export const NoMatchAltLoader = styled(StyledAltLoader)`
  width: 350px;
  height: 350px;
`;

export const NoMatchAppTitle = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
  padding: ${({ theme }) => theme.metrics.padding.s};
  margin: 0;
`;

export const Text404 = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.alternative};
  font-weight: 750;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 0;
  margin-bottom:0;
  padding-left: ${({ theme }) => theme.metrics.padding.xxl};
`;

export const TextMessage = styled.h2`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 550;
  text-align: center;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-bottom: ${({ theme }) => theme.metrics.margin.xl};
  padding-right: ${({ theme }) => theme.metrics.padding.xxl};
`;

export const LogoNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-self: start;
  width: 180px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.margin.s};
`;
