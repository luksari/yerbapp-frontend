import styled from 'styled-components';
import { theme } from 'theme/theme';
import { StylesConfig } from 'react-select';

const errorReactSelectStyles = ({
  touched, error, focused,
}) => {
  const styles = { borderColor: 'transparent' };
  if (error) {
    styles.borderColor = `${theme.colors.danger}`;
  } else if (focused) {
    styles.borderColor = `${theme.colors.primary}`;
  } else {
    styles.borderColor = 'transparent';
  }
  return touched ? styles : {};
};

export const customSelectStyles: StylesConfig = {
  control: (provided, state) => {
    const errorCSS = errorReactSelectStyles({
      touched: state.selectProps.touched,
      error: state.selectProps.error,
      focused: state.isFocused,
    });
    return ({
      ...provided,
      backgroundColor: `${theme.colors.mainBackground}`,
      boxShadow: 'none',
      borderWidth: '1px',
      borderRadius: state.selectProps.menuIsOpen ? '4px 4px 0px 0px' : '4px',
      borderColor: 'transparent',
      ...errorCSS,
    });
  },
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    willChange: 'transform',
    transition: 'transform 0.2s ease-in-out',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    cursor: 'pointer',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    '&:hover': {
      color: theme.colors.alternativeText,
      backgroundColor: theme.colors.danger,
    },
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    color: theme.colors.primaryText,
    fontWeight: 500,
  }),
  multiValue: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.primary,
    color: theme.colors.alternativeText,
  }),
  menu: (provided) => ({
    ...provided,
    margin: '0px',
    borderRadius: '0px 0px 4px 4px',
    padding: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    margin: '0px',
    fontWeight: 500,
    background: 'none',
    fontSize: '13px',
    cursor: 'pointer',
    color: state.isSelected ? `${theme.colors.primaryText}` : `${theme.colors.disabledText}`,
    '&:hover': {
      color: theme.colors.primaryText,
      background: theme.colors.disabledBackground,
    },
    label: {
      cursor: 'pointer',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '13px',
    color: theme.colors.decorators,
  }),
} as StylesConfig;

export const OptionWrapper = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-columns: 32px 1fr;
`;
