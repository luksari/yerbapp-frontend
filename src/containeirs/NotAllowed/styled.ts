import styled, { css } from 'styled-components';
import { StyledLoader, StyledAltLoader } from 'components/Loader/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-wrap: wrap;
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
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
    height: 100%;

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
  align-self: center;
  justify-self: center;
  padding: ${({ theme }) => theme.metrics.padding.s};
  margin: 0;
`;

export const Text404 = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.alternative};
  font-weight: 750;
  line-height: ${({ theme }) => theme.metrics.fontSize.xxxl};
  text-align: center;
  margin-bottom:0;
`;

export const TextMessage = styled.h2`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 550;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.metrics.margin.xl};

`;

export const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  position: absolute;
  margin: ${({ theme }) => theme.metrics.margin.s};
  padding: ${({ theme }) => theme.metrics.padding.xxl};
  left: 0;
  top: 0;
`;
