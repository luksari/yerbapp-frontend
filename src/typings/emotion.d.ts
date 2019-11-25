import baseStyled, { CreateStyled } from '@emotion/styled';
import { Theme } from 'theme/theme';

declare module '@emotion/styled' {
  export const styled = baseStyled as CreateStyled<Theme>;

}
