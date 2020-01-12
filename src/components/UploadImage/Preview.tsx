import React, { FC, useEffect } from 'react';
import { StyledThumb, ThumbInner } from './styled';

interface Props {
  file?: ExtendedFile;
}

export const Preview: FC<Props> = ({ file }) => {
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    URL.revokeObjectURL(file.path);
  }, [file]);

  return (
    <>
      {file ? (
        <StyledThumb key={file.name}>
          <ThumbInner src={file.preview} />
        </StyledThumb>
      )
        : <p>Brak pliku</p>}
    </>
  );
};
