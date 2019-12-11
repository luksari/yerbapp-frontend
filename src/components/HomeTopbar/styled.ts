import styled from 'styled-components';

export const StyledHomeTopbar = styled.section`
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.m};
`;

export const HomeAppTitle = styled.h1`
  font-size: ${({ theme }) => theme.metrics.fontSize.l};
  color: ${({ theme }) => theme.colors.alternativeText};
  font-weight: 700;
  align-self: center;
  justify-self: center;
  padding: ${({ theme }) => theme.metrics.padding.s};
  margin: 0;
  display: flex;
  flex-direction: row;
  span {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
  }
`;

export const LogoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding.s};
`;
