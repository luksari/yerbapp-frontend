import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.mainBackground};
`;

export const StyledForm = styled.form`
    width: 100%;
    flex: 1 1 auto;
    display: grid;
    background: ${({ theme }) => theme.colors.mainBackground};
    grid-gap: 19px;
    grid-auto-rows: max-content;
    padding: 42px;
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
