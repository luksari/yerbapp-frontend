import { InputLabel, InputWrapper } from 'components/Form/components/FormField/styled';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from 'utils/uploadImage';
import { Preview } from './Preview';
import { Container } from './styled';

interface Props {
  name: string;
  label: string;
}

export const UploadImage: FC<Props> = ({ name, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const value: ExtendedFile = get(values, name);

  const [file, setFile] = useState(value);
  const [photoUrl, setPhotoUrl] = useState();

  const onDrop = useCallback(async (acceptedFiles) => {
    const copyFile = new File([acceptedFiles[0]], acceptedFiles[0].name, { type: acceptedFiles[0].type });

    const previewFile = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
    const { url } = await uploadImage(copyFile);
    setFieldValue(name, url);
    setFile(previewFile);
  }, []);


  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: ['image/*'], multiple: false });

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <Container {...getRootProps()} state={{ isDragActive, isDragAccept, isDragReject }}>
        <input {...getInputProps()} />
        {
          isDragActive
            ? <p>Upuść plik w tym miejscu...</p>
            : <p>Upuść plik w tym miejscu, lub kliknij i wybierz...</p>
        }
        {file && <Preview file={file} /> }
      </Container>
    </InputWrapper>
  );
};
