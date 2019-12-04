import styled, { css } from 'styled-components';

export const ImageSection = styled.div`
${({ theme }) => css`
    display: flex;
    height:100%;
    width: 100%;
    border: solid red;
    align-items: center;
    margin:0;
`}
`;

export const Image = styled.img`
${({ theme }) => css`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`}
`;

export const ImageText = styled.h2`
${({ theme }) => css`
    font-size: ${theme.metrics.fontSize.l};
    color: ${theme.colors.alternativeText};
    padding: ${theme.metrics.padding.s};
    position: absolute;
    text-align: center;
    justify-self: center;
    vertical-align: middle;
`}
`;
