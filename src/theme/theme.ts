// eslint-disable-next-line import/no-extraneous-dependencies
import styled, { CreateStyled } from '@emotion/styled-base';

export const theme = {
  colors: {
    mainText: '#0F1A20',
    alternativeText: '#FFFFFF',
    labelText: '#424B54',
    disabledText: '#93A8AC',
    disabledBackground: '#EDF4ED',
    danger: '#F42C04',
    warning: '#FF9F1C',
    decorators: '#E8E9F3 ',
    primary: '#9BC53D',
    alternative: '#2E933C',
    mainBackground: '#FFFFFF',
  },
  metrics: {
    fontSize: {
      xs: '0.7rem',
      s: '0.9rem',
      m: '1rem',
      l: '1.8rem',
      xl: '2.7rem',
      xxl: '4rem',
    },
    margin: {
      s: '5px',
      m: '15px',
      l: '40px',
      xl: '45px',
    },
    padding: {

    },
  },
  gradients: {

  },
  animations: {

  },
  fonts: {

  },
};

export type Theme = typeof theme;
export default styled as CreateStyled<Theme>;
