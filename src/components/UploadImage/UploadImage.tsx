import { InputLabel, InputWrapper } from 'components/Form/components/FormField/styled';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import React, {
  FC, useCallback, useState, memo,
} from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from 'utils/uploadImage';
import { Preview } from './Preview';
import { Container } from './styled';

interface Props {
  name: string;
  label: string;
}

export const UploadImage: FC<Props> = memo(({ name, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const value = get(values, name);

  const [preview, setPreview] = useState(value);

  const handleRemoveImage = useCallback(() => {
    setFieldValue(name, '');
    setPreview('');
  }, []);

  const onDrop = async (acceptedFiles) => {
    const copyFile = new File([acceptedFiles[0]], acceptedFiles[0].name, { type: acceptedFiles[0].type });
    const fileFromApi = await uploadImage(copyFile);

    setFieldValue(name, fileFromApi.url);
    setPreview(fileFromApi.url);
  };


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
      </Container>
      {preview && <Preview preview={preview} removeImage={handleRemoveImage} />}
    </InputWrapper>
  );
});
