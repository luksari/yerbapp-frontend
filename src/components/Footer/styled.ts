import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const FooterMain = styled.section`
  padding: ${({ theme }) => theme.metrics.padding.m};
  display: flex;
  flex: 1;
  width: 100%;
  background:  ${({ theme }) => theme.colors.primaryTextDarken};
  justify-content: center;
  p {
    display: inline;
    margin: ${({ theme }) => theme.metrics.margin.s};
    font-size: ${({ theme }) => theme.metrics.fontSize.s};
    color: ${({ theme }) => theme.colors.mainBackground};
    font-weight: 400;
    a{
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
