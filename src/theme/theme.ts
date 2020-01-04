
export const theme = {
  colors: {
    primaryText: '#0F1A20',
    primaryTextDarken: '#0A141A',
    alternativeText: '#FFFFFF',
    labelText: '#424B54',
    disabledText: '#93A8AC',
    disabledBackground: '#EDF4ED',
    danger: '#EE5E41',
    dangerHover: '#F1694F',
    warning: '#F7B800',
    warningHover: '#FFCB44',
    decorators: '#E8E9F3 ',
    shadow: '#B9BDC8 ',
    primary: '#9BC53D',
    primaryHover: '#A8CE54',
    alternative: '#2E933C',
    alternativeHover: '#479F53',
    info: '#257FE6',
    infoHover: '#458DDF',
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
      xxxl: '15rem',
    },
    margin: {
      s: '5px',
      m: '15px',
      l: '20px',
      xl: '35px',
      xxl: '70px',
      xxxl: '120px',
    },
    padding: {
      xs: '5px',
      s: '10px',
      m: '15px',
      l: '25px',
      xl: '30px',
      xxl: '45px',
    },
    width: {
      sidebarWidth: '180px',
    },
  },
  gradients: {
    primaryToAlt: 'linear-gradient(129deg, rgba(155,197,61,1) 0%, rgba(71,159,83,1) 100%)',
  },
  animations: {

  },
  fonts: {

  },
};

export type ThemeInterface = typeof theme
