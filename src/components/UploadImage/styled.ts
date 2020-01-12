import { DropzoneState } from 'react-dropzone';
import styled, { css } from 'styled-components';
import { ThemeInterface } from 'theme/theme';

const getColor = (state: Partial<DropzoneState>, theme: ThemeInterface) => {
  if (state.isDragAccept) {
    return theme.colors.primary;
  }
  if (state.isDragReject) {
    return theme.colors.danger;
  }
  if (state.isDragActive) {
    return theme.colors.info;
  }
  return theme.colors.decorators;
};

export const Container = styled.div<{ state: Partial<DropzoneState> }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
  border-radius: 4px;
  border: 2px solid ${({ theme, state }) => getColor(state, theme)};
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  outline: none;
  transition: border .24s ease-in-out;
  cursor: pointer;
  p {
    margin: 0;
  }
`;

export const StyledThumb = styled.div`
  padding: 25px;
  max-width: 250px;
  max-height: 250px;
`;

export const ThumbInner = styled.div<{ src: string }>`
  overflow: hidden;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  ${({ src }) => css`
    background: url(${src}) no-repeat center center;
`}
`;
