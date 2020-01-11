import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Container } from './styled';

export const UploadImage = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: ['image/jpeg, image/png'] });

  return (
    <Container {...getRootProps()} state={{ isDragActive, isDragAccept, isDragReject }}>
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag drop some files here, or click to select files</p>
      }
    </Container>
  );
};
