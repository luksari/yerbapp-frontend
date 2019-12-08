import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  padding: ${({ theme }) => theme.metrics.padding.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
    width: 100%;
    display: grid;
    grid-row-gap: ${({ theme }) => theme.metrics.margin.m};
    padding: ${({ theme }) => theme.metrics.padding.xl};
`;

export const FormCard = styled(StyledForm)`
    background: ${({ theme }) => theme.colors.mainBackground};
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
      width: 100%;
    }
`;

export const FormActionsWrapper = styled.div`
    margin-top: auto;
    align-self: flex-end;
    justify-self: flex-end;
    background: ${({ theme }) => theme.colors.mainBackground};
    width: 100%;
    padding: ${({ theme }) => theme.metrics.padding.l};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${({ theme }) => theme.metrics.margin.m};
    justify-items: center;
`;
