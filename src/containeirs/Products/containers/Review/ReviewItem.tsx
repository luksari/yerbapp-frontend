import React, { FC, memo } from 'react';
import { Review } from 'generated/graphql';
import { ReviewCard, ReviewDescription } from 'containeirs/Products/styled';
import { FormFieldset } from 'components/Form/components/FormFieldset/FormFieldset';
import { Rating } from 'components/Rating';
import { SizeType } from 'components/Rating/types';
import moment from 'moment';

interface Props {
  data: Pick<Review, 'id' | 'description' | 'aroma' | 'taste' | 'bitterness' | 'energy' | 'price' | 'overall' | 'editedAt' | 'createdAt'>;
}

export const ReviewItem: FC<Props> = memo(({ data }) => {
  return (
    <ReviewCard>
      <FormFieldset>
        {moment(new Date(+data.createdAt)).format('DD.MM.YYYY HH:mm')}
        <ReviewDescription>{data.description || 'Brak opisu'}</ReviewDescription>
        <FormFieldset
          columns={3}
          fullWidth
        >
          <Rating
            readonly
            size={SizeType.Small}
            label="Aromat"
            initialRating={data.aroma}
          />
          <Rating
            readonly
            size={SizeType.Small}
            label="Gorycz"
            initialRating={data.bitterness}
          />
          <Rating
            readonly
            size={SizeType.Small}
            label="Pobudzenie"
            initialRating={data.energy}
          />
          <Rating
            readonly
            size={SizeType.Small}
            label="Cena"
            initialRating={data.price}
          />
          <Rating
            readonly
            size={SizeType.Small}
            label="Smak"
            initialRating={data.taste}
          />
          <Rating
            readonly
            size={SizeType.Small}
            label="Ogólna ocena"
            initialRating={data.overall}
          />
        </FormFieldset>
      </FormFieldset>
    </ReviewCard>
  );
});
