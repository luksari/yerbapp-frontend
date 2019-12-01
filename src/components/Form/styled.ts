import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.mainBackground};
`;

export const StyledForm = styled.form`
    width: 100%;
    display: grid;
    background: ${({ theme }) => theme.colors.mainBackground};
    grid-row-gap: ${({ theme }) => theme.metrics.margin.m};
    padding: ${({ theme }) => theme.metrics.padding.xl};
    grid-auto-rows: max-content;
`;

export const FormCard = styled(StyledForm)`
      margin-top: ${({ theme }) => theme.metrics.margin.xl};
      min-width: 460px;
      min-height: 460px;
      border-radius: 4px;
       ${({ theme }) => css`
        font-size: ${theme.metrics.fontSize.m};
        box-shadow: 0 10px 10px -5px ${theme.colors.shadow};

  `}
`;

export const FormTitle = styled.h2`
    font-size: ${({ theme }) => theme.metrics.fontSize.l};
    background: ${({ theme }) => theme.colors.mainBackground};
    color: ${({ theme }) => theme.colors.primaryText};
    margin-bottom: ${({ theme }) => theme.metrics.margin.m};
    font-weight: 500;
    &::after {
      margin-top: ${({ theme }) => theme.metrics.margin.m};
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.decorators};
    }
`;

export const FormActionsWrapper = styled.div`
    background: ${({ theme }) => theme.colors.mainBackground};
    width: 100%;
    padding: ${({ theme }) => theme.metrics.padding.l};
    display: flex;
    flex: 0.5 0 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.decorators};
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.metrics.margin.m};
    justify-items: center;
`;
