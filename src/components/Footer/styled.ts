import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const FooterBottom = styled.section`
  padding: ${({ theme }) => theme.metrics.padding.l};
  display: flex;
  flex: 1;
  width: 100%;
  background:  ${({ theme }) => theme.colors.primaryTextDarken};
  justify-content: center;
  p {
    display: inline;
    margin: ${({ theme }) => theme.metrics.margin.s};
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.metrics.fontSize.m};
    color: ${({ theme }) => theme.colors.mainBackground};
    font-weight: 500;

    a{
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
