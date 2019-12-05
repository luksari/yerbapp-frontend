import styled from 'styled-components';
import { Icon } from 'antd';

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  background: red;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckedIcon = styled(Icon) <{checked?: boolean}>`
    font-size: 1.2em;
    font-weight: 700;
    text-align:center;
    visibility: ${({ checked }) => checked ? 'visible' : 'hidden'}
`;
