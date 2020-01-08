import { useFormikContext } from 'formik';
import React, { useCallback, useEffect, FC } from 'react';
import { debounce } from 'lodash';


interface Props {
  debounceMs: number;
}

export const WithAutoSave: FC<Props> = ({ debounceMs, children }) => {
  const formik = useFormikContext();
  const debouncedSubmit = useCallback(
    debounce(
      () => formik.submitForm(),
      debounceMs,
    ),
    [debounceMs, formik.submitForm],
  );
  useEffect(() => {
    debouncedSubmit();
  }, [debouncedSubmit, formik.values]);


  return (
    <>
      {children}
    </>
  );
};
