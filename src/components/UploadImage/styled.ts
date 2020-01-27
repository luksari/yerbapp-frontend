import { DropzoneState } from 'react-dropzone';
import styled, { css } from 'styled-components';
import { ThemeInterface } from 'theme/theme';
import { ButtonBox } from 'components/Button/styled';

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

export const ActionButtons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ffffffaa;
  display: flex;
  transform: scale(0);
  justify-content: center;
  align-items: flex-end;
  transition: transform 150ms linear;
  ${ButtonBox} {
    transform: scale(0);
    transition: transform 150ms 150ms linear;
  }
`;


export const StyledThumb = styled.div`
  margin-top: 25px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.disabledBackground};
  padding: 25px;
  :hover {
    ${ActionButtons} {
      transform: scale(1);
      ${ButtonBox} {
        transform: scale(1);
      }
    }
  }
`;

export const ThumbInner = styled.img<{ src: string }>`
  overflow: hidden;
  border-radius: 10px;
  width: 300px;
  height: auto;
`;
