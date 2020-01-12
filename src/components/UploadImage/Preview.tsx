import React, { FC, useEffect, useState } from 'react';
import { StyledThumb, ThumbInner } from './styled';

interface Props {
  file?: ExtendedFile;
  url?: string;
}

export const Preview: FC<Props> = ({ file, url }) => {
  const [preview, setPreview] = useState(file);
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    setPreview(file);
    URL.revokeObjectURL(preview.path);
  }, [file]);

  return (
    <>
      {file ? (
        <StyledThumb key={preview.name}>
          <ThumbInner src={preview.preview || url} />
        </StyledThumb>
      )
        : <p>Brak pliku</p>}
    </>
  );
};
