import React, { FC } from 'react';
import { withFormik, InjectedFormikProps, Form } from 'formik';
import { Typography } from 'antd';

interface SignUpFormData {
  data: any;
}
interface OwnFormProps {
  data: any;
}
const SignUpFormRaw: FC<InjectedFormikProps<OwnFormProps, SignUpFormData>> = () => {
  return (
    <Form>
     <Typography.Title level={2}>Utwórz konto</Typography.Title>
    </Form>
  );
};
