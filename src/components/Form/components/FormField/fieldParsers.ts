/** In this file we can declare parsers for redux-form value flow */

/**
 * @param value: Field value,
 * This function parses empty value to null,
 * to make value understandable for redux-form,
 * that it should not be submitted
 */
export const emptyStringFilter = (value: any) => {
  if (value === '') {
    return null;
  }
  return value;
};
