import { pickBy, isNumber } from 'lodash';

export const getAnyImportance = (values: any) => pickBy(values, (value) => isNumber(value) && value !== 0);
