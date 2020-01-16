import { InputLabel, InputWrapper } from 'components/Form/components/FormField/styled';
import { useFormikContext } from 'formik';
import { get } from 'lodash';
import React, {
  FC, useCallback, useState, memo, useMemo, useEffect,
} from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from 'utils/uploadImage';
import { Preview } from './Preview';
import { Container } from './styled';
import { isFileFromApi, isExtendedFile } from './types';

interface Props {
  name: string;
  label: string;
}

export const UploadImage: FC<Props> = memo(({ name, label }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const value = useMemo(() => get(values, name), [values]);

  const [file, setFile] = useState(value);
  const [preview, setPreview] = useState(value);

  const handleRemoveImage = useCallback(() => {
    setFile(null);
    setFieldValue(name, '');
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    const copyFile = new File([acceptedFiles[0]], acceptedFiles[0].name, { type: acceptedFiles[0].type });
    const previewFile = Object.assign(acceptedFiles[0], { preview: URL.createObjectURL(acceptedFiles[0]) });
    const fileFromApi = await uploadImage(copyFile);

    setFieldValue(name, fileFromApi.url);
    setFile(previewFile);
  }, []);

  useEffect(() => () => {
    if (file) {
      if (isFileFromApi(file)) {
        setPreview(file.url);
      } else if (isExtendedFile(file)) {
        setPreview(file.preview);
        // Make sure to revoke the data uris to avoid memory leaks
        URL.revokeObjectURL(preview);
      }
    }
  }, [file]);

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
      {file && <Preview preview={preview} removeImage={handleRemoveImage} />}
    </InputWrapper>
  );
});
