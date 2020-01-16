import React, {
  FC, memo,
} from 'react';
import { Button, ButtonType } from 'components/Button';
import { Icon } from 'antd';
import { StyledThumb, ThumbInner, ActionButtons } from './styled';


interface Props {
  preview?: string;
  removeImage: VoidFunction;
}

export const Preview: FC<Props> = memo(({ preview, removeImage }) => {
  return (
    <StyledThumb>
      <ActionButtons>
        <Button themeType={ButtonType.Danger} type="button" onClick={removeImage} icon={<Icon type="delete" />}>Usuń zdjęcie</Button>
      </ActionButtons>
      <ThumbInner src={preview} />
    </StyledThumb>
  );
});
