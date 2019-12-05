import React, { FC } from 'react';
import moment from 'moment';
import { DetailsWrapper, AdditionalText, TextWrapper } from './styled';

interface FormDetailsProps {
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
}

export const FormDetails: FC<FormDetailsProps> = ({
  createdAt,
  updatedAt,
  createdBy,
  updatedBy,
}) => (
  <DetailsWrapper>
    <TextWrapper>
      <AdditionalText isLabel>Utworzono</AdditionalText>
      <AdditionalText>{moment(createdAt).format('DD-MM-YYYY')}</AdditionalText>
      <AdditionalText bold withMargin>{createdBy}</AdditionalText>
    </TextWrapper>
    <TextWrapper>
      <AdditionalText isLabel>Zmodyfikowano</AdditionalText>
      <AdditionalText>{moment(updatedAt).format('DD-MM-YYYY')}</AdditionalText>
      <AdditionalText bold withMargin>{updatedBy}</AdditionalText>
    </TextWrapper>
  </DetailsWrapper>
);
