import styled from 'styled-components';
import { baseInputStyles, errorBorderStyles } from 'components/Form/components/FormField/styled';
import { FieldMetaProps } from 'formik';

export const StyledTextArea = styled.textarea<Partial<FieldMetaProps<string>>>`
  ${baseInputStyles};
  ${({
    theme, error, touched,
  }) => errorBorderStyles({ theme, error, touched })}
  margin-bottom: 9px;
  height: auto;
`;
