import React, { FC, useMemo, memo } from 'react';
import ReactSelect, {
  OptionProps, components, ValueType, ActionMeta,
} from 'react-select';
import { Checkbox } from 'components/Checkbox';
import { SelectableItem } from 'utils/types';
import { useFormikContext } from 'formik';
import { customSelectStyles, OptionWrapper } from './styled';
import { FixedSelectProps } from './types';

type OwnProps = {
    /** These props are used by Formik inputs */
    touched?: boolean;
    error?: any;
    warning?: any;
    value?: any;
}

type SelectProps = FixedSelectProps & OwnProps;

/** Input factory that passes proper 'id' to 'input' element, to match label 'for' attribute */
const InputFactory = (id: string) => (props) => {
  /** it is marked as any because of mismatching of props that components.Input accepts */
  const InputComponent = components.Input as any;
  return (
    <InputComponent {...props} type="text" id={id} />
  );
};
const MultiValue = ({ data: { label }, ...rest }) => (
  <components.MultiValue {...rest}>
    <span>{label}</span>
  </components.MultiValue>
);

const Option: FC<OptionProps<SelectableItem>> = ({
  isSelected,
  label,
  ...props
}) => (
  <components.Option {...props}>
    <OptionWrapper>
      <Checkbox checked={isSelected} onChange={() => null} />
      <label>{label}</label>
    </OptionWrapper>
  </components.Option>
);

export const Select: FC<SelectProps> = memo(({
  options,
  placeholder,
  onChange,
  value,
  onBlur,
  touched,
  error,
  warning,
  name,
  ...rest
}) => {
  const meta = { touched, error, warning };
  const { setFieldValue } = useFormikContext();
  /** Workaround for null value payload after remove-value action,
   *  that is fired on click when removing button is clicked on single element of react-select
   * @see https://github.com/JedWatson/react-select/issues/3632
  */
  /** @todo Here is bug */
  const handleOnChange = (val: SelectableItem, action: ActionMeta) => {
    if (!onChange) return;
    console.log(val, action);
    if (val === null) {
      onChange([], action);
      setFieldValue(name, []);
    } else {
      onChange(val, action);
      setFieldValue(name, val.value);
    }
  };
  /** Marked as any because type mismatching with React-Select componennts prop */
  const Input: any = useMemo(() => name && InputFactory(name), [name]);
  return (
    <ReactSelect
      onChange={handleOnChange}
      styles={customSelectStyles}
      value={options ? options.find((option) => option.value === value) : ''}
      options={options}
      components={{ Option, MultiValue, Input }}
      placeholder={placeholder}
      onBlur={() => onBlur && onBlur(value)}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      noOptionsMessage={() => 'Brak rekordów!'}
      name={name}
      {...meta}
      {...rest}
    />
  );
});
