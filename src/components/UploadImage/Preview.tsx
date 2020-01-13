import React, {
  FC, useEffect, useState, memo,
} from 'react';
import { Button, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import { StyledThumb, ThumbInner, ActionButtons } from './styled';

interface Props {
  file?: ExtendedFile;
  url?: string;
  removeImage: VoidFunction;
}

export const Preview: FC<Props> = memo(({ file, url, removeImage }) => {
  const [preview, setPreview] = useState(file);
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    setPreview(file);
    URL.revokeObjectURL(preview.path);
  }, [file]);
  console.log('Preview', preview);

  return (
    <>
      {preview && (
        <StyledThumb key={preview.name}>
          <ActionButtons>
            <Button themeType={ButtonType.Danger} type="button" onClick={removeImage} icon={<Icon type="delete" />}>Usuń zdjęcie</Button>
          </ActionButtons>
          <ThumbInner src={preview.preview || url} />
        </StyledThumb>
      )}
    </>
  );
});
