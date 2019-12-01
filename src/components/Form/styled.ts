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
  ${({ theme }) => css`
      margin: 0;
      min-width: 460px;
      min-height: 460px;
      font-size: ${theme.metrics.fontSize.s};
      box-shadow: 0 10px 10px 0px ${theme.colors.decorators};
      border-radius: 4px;
  `}
`;

export const FormTitle = styled.h2`
    font-size: 18px;
    background: ${({ theme }) => theme.colors.mainBackground};
    color: ${({ theme }) => theme.colors.primaryText};
    margin-bottom: 36px;
    font-weight: 500;
`;

export const FormActionsWrapper = styled.div`
    background: ${({ theme }) => theme.colors.mainBackground};
    width: 100%;
    padding: 27px;
    display: flex;
    flex: 0.5 0 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.decorators};
`;

export const ButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 9px;
    justify-items: center;
`;
