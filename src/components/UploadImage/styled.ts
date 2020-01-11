import styled from 'styled-components';
import { DropzoneState } from 'react-dropzone';
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
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${({ theme, state }) => getColor(state, theme)};
  border-style: dashed;
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  outline: none;
  transition: border .24s ease-in-out;
`;
