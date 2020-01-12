import { useFormikContext } from 'formik';
import { get } from 'lodash';
import React, { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Preview } from './Preview';
import { Container } from './styled';

interface Props {
  name: string;
}

export const UploadImage: FC<Props> = ({ name }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const value: ExtendedFile = get(values, name);

  const [file, setFile] = useState(value);

  const onDrop = useCallback((acceptedFiles) => {
    const newFile: ExtendedFile = {
      ...acceptedFiles[0],
      preview: URL.createObjectURL(acceptedFiles[0]),
    };
    setFieldValue(name, newFile);
    setFile(newFile);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: ['image/*'], multiple: false });

  return (
    <Container {...getRootProps()} state={{ isDragActive, isDragAccept, isDragReject }}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Upuść plik w tym miejscu...</p>
          : <p>Upuść plik w tym miejscu, lub kliknij i wybierz...</p>
      }
      {file && <Preview file={file} /> }
    </Container>
  );
};
